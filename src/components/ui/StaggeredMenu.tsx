"use client";

import React, { useCallback, useLayoutEffect, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import './StaggeredMenu.css';

export interface StaggeredMenuItem {
  label: string;
  ariaLabel: string;
  link: string;
  onClick?: () => void;
}

export interface StaggeredMenuSocialItem {
  label: string;
  link: string;
}

export interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: StaggeredMenuSocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  showLogo?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  isFixed?: boolean;
  actionButton?: React.ReactNode;
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#C59B27', '#165342', '#0D3B2E'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoUrl = '/logo.png',
  showLogo = true,
  menuButtonColor = '#0F1F1A',
  openMenuButtonColor = '#ffffff',
  accentColor = '#C59B27',
  changeMenuColorOnOpen = true,
  closeOnClickAway = true,
  isFixed = false,
  onMenuOpen,
  onMenuClose,
  actionButton
}: StaggeredMenuProps) => {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const preLayersRef = useRef<HTMLDivElement | null>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const iconRef = useRef<SVGSVGElement | null>(null);
  const textInnerRef = useRef<HTMLSpanElement | null>(null);
  const textWrapRef = useRef<HTMLSpanElement | null>(null);
  const [textLines, setTextLines] = useState<string[]>(['Menu', 'Close']);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Tween | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      const origBodyOverflow = document.body.style.overflow;
      const origHtmlOverflow = document.documentElement.style.overflow;
      const origTouchAction = document.body.style.touchAction;

      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';

      return () => {
        document.body.style.overflow = origBodyOverflow;
        document.documentElement.style.overflow = origHtmlOverflow;
        document.body.style.touchAction = origTouchAction;
      };
    }
  }, [open]);

  useIsomorphicLayoutEffect(() => {
    if (!mounted) return;
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer')) as HTMLElement[];
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen, autoAlpha: 0 });
      if (preContainer) {
        gsap.set(preContainer, { xPercent: 0, autoAlpha: 1 });
      }
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [mounted, menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const topBar = panel.querySelector('.sm-panel-top-bar') as HTMLElement | null;
    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
    const numberEls = Array.from(
      panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
    ) as HTMLElement[];
    const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
    const ctaEl = panel.querySelector('.sm-panel-cta') as HTMLElement | null;

    const offscreen = position === 'left' ? -100 : 100;
    const layerStates = layers.map((el) => ({ el, start: offscreen }));
    const panelStart = offscreen;

    if (topBar) {
      gsap.set(topBar, { opacity: 0, y: -12 });
    }
    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 130, rotate: 6 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 16, opacity: 0 });
    }
    if (ctaEl) {
      gsap.set(ctaEl, { opacity: 0, y: 12 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start, autoAlpha: 1 }, { xPercent: 0, duration: 0.45, ease: 'power4.out' }, i * 0.05);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.05 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.05 : 0);
    const panelDuration = 0.55;
    tl.fromTo(
      panel,
      { xPercent: panelStart, autoAlpha: 1 },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (topBar) {
      tl.to(
        topBar,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        },
        panelInsertTime + 0.08
      );
    }

    if (itemEls.length) {
      const itemsStartRatio = 0.12;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 0.7,
          ease: 'power4.out',
          stagger: { each: 0.04, from: 'start' }
        },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.45,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.04, from: 'start' }
          },
          itemsStart + 0.06
        );
      }
    }

    if (ctaEl) {
      const ctaStart = panelInsertTime + panelDuration * 0.3;
      tl.to(
        ctaEl,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out'
        },
        ctaStart
      );
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.35;
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
          },
          socialsStart
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: 'power3.out',
            stagger: { each: 0.05, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.03
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [position]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all: HTMLElement[] = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      autoAlpha: 0,
      duration: 0.28,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel')) as HTMLElement[];
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 130, rotate: 6 });
        }
        const numberEls = Array.from(
          panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item')
        ) as HTMLElement[];
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title') as HTMLElement | null;
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link')) as HTMLElement[];
        const ctaEl = panel.querySelector('.sm-panel-cta') as HTMLElement | null;
        const topBar = panel.querySelector('.sm-panel-top-bar') as HTMLElement | null;
        if (topBar) gsap.set(topBar, { opacity: 0, y: -12 });
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 16, opacity: 0 });
        if (ctaEl) gsap.set(ctaEl, { opacity: 0, y: 12 });
        busyRef.current = false;
      }
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { rotate: 45, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
    } else {
      spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.3, ease: 'power3.inOut', overwrite: 'auto' });
    }
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.12,
          duration: 0.25,
          ease: 'power2.out'
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 2;
    const seq: string[] = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);

    gsap.set(inner, { yPercent: 0 });
    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.4 + lineCount * 0.05,
      ease: 'power4.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  return (
    <div
      className={(className ? className + ' ' : '') + 'staggered-menu-wrapper' + (isFixed ? ' fixed-wrapper' : '')}
      style={accentColor ? { ['--sm-accent' as any]: accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      {/* Inline Toggle Button */}
      <button
        ref={toggleBtnRef}
        className="sm-toggle"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="staggered-menu-panel"
        onClick={toggleMenu}
        type="button"
      >
        <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
          <span ref={textInnerRef} className="sm-toggle-textInner">
            {textLines.map((l, i) => (
              <span className="sm-toggle-line" key={i}>
                {l}
              </span>
            ))}
          </span>
        </span>
        <svg
          ref={iconRef}
          className="sm-icon"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="2" y1="7" x2="12" y2="7" />
          <line x1="7" y1="2" x2="7" y2="12" />
        </svg>
      </button>

      {/* Portaled Fullscreen Overlay & Drawer directly to document.body */}
      {mounted &&
        createPortal(
          <div
            className="staggered-menu-portal-root"
            style={accentColor ? { ['--sm-accent' as any]: accentColor } : undefined}
            data-position={position}
            data-open={open || undefined}
          >
            {/* Backdrop overlay */}
            {open && (
              <div
                className="staggered-menu-backdrop"
                onClick={closeMenu}
                aria-hidden="true"
              />
            )}

            {/* Fullscreen Prelayers */}
            <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
              {(() => {
                const raw = colors && colors.length ? colors.slice(0, 4) : ['#C59B27', '#165342', '#0D3B2E'];
                let arr = [...raw];
                if (arr.length >= 3) {
                  const mid = Math.floor(arr.length / 2);
                  arr.splice(mid, 1);
                }
                return arr.map((c, i) => <div key={i} className="sm-prelayer" style={{ background: c }} />);
              })()}
            </div>

            {/* Fullscreen Drawer Panel */}
            <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
              <div className="sm-panel-inner">
                {/* Top Bar inside Fullscreen Panel */}
                <div className="sm-panel-top-bar">
                  <div className="flex items-center gap-3">
                    <img
                      src={logoUrl || '/logo.png'}
                      alt="Shri VHS Global Trade Logo"
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={closeMenu}
                    className="sm-close-btn"
                    aria-label="Close menu"
                  >
                    <span>Close</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="2" y1="2" x2="12" y2="12" />
                      <line x1="12" y1="2" x2="2" y2="12" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Items List */}
                <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
                  {items && items.length ? (
                    items.map((it, idx) => (
                      <li className="sm-panel-itemWrap" key={it.label + idx}>
                        <a
                          className="sm-panel-item"
                          href={it.link}
                          aria-label={it.ariaLabel}
                          data-index={idx + 1}
                          onClick={() => {
                            if (it.onClick) it.onClick();
                            closeMenu();
                          }}
                        >
                          <span className="sm-panel-itemLabel">{it.label}</span>
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="sm-panel-itemWrap" aria-hidden="true">
                      <span className="sm-panel-item">
                        <span className="sm-panel-itemLabel">No items</span>
                      </span>
                    </li>
                  )}
                </ul>

                {/* Action CTA Button */}
                {actionButton && (
                  <div className="sm-panel-cta" onClick={closeMenu}>
                    {actionButton}
                  </div>
                )}

                {/* Social and Direct Inquiries */}
                {displaySocials && socialItems && socialItems.length > 0 && (
                  <div className="sm-socials" aria-label="Social links">
                    <h3 className="sm-socials-title">Direct Inquiries & Connect</h3>
                    <ul className="sm-socials-list" role="list">
                      {socialItems.map((s, i) => (
                        <li key={s.label + i} className="sm-socials-item">
                          <a
                            href={s.link}
                            target={s.link.startsWith('http') ? '_blank' : undefined}
                            rel={s.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="sm-socials-link"
                            onClick={closeMenu}
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>,
          document.body
        )}
    </div>
  );
};

export default StaggeredMenu;
