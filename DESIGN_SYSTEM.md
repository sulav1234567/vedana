# VEDANA Professional Color & Design System

## 🎨 Complete Design System Reference

### Primary Purple Gradient (Brand Colors)

```
Primary 500: #7C3AED
Primary 600: #6D28D9 (Primary Button)
Primary 700: #5B21B6 (Hover State)

Usage:
- Buttons: Gradient from 600 to 700
- Links: Primary 600
- Active states: Primary 700
- Hover effects: Lighter Primary 500
```

### Secondary Colors

```
Pink:     #EC4899 (Companion Mira, Interactive elements)
Blue:     #0EA5E9 (Information, Secondary actions)
Green:    #10B981 (Success, Achievements)
Purple:   #A855F7 (Gradients, Highlights)
Indigo:   #6366F1 (Alternative accent)
```

### Neutral Palette

```
White (Primary Background):    #FFFFFF
Light Gray (Secondary BG):     #F8FAFC
Lighter Gray (Tertiary BG):    #F1F5F9
Active/Hover BG:               #F0F4FF

Text Primary (Headlines):      #0F172A
Text Secondary (Body):         #475569
Text Tertiary (Labels):        #94A3B8

Borders Light:                 #E2E8F0
Borders Medium:                #CBD5E1
Borders Active:                #DDD6FE
```

### Accent Colors

```
Success:  #10B981
Warning:  #F59E0B
Danger:   #EF4444
```

---

## 📐 Complete Typography System

### Font Family
```
Primary: 'Inter'
Fallback: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif
```

### Font Sizes

```
Extra Small:  0.75rem    (12px)
Small:        0.875rem   (14px)
Base:         1rem       (16px)
Large:        1.125rem   (18px)
XL:           1.25rem    (20px)
2XL:          1.5rem     (24px)
3XL:          2rem       (32px)
4XL:          2.5rem     (40px)
```

### Font Weights

```
Regular:  500 (body text)
Medium:   600 (secondary text)
Bold:     700 (labels, badges)
Extra:    800 (headers, headlines)
```

### Line Heights

```
Tight:    1.2  (headers)
Normal:   1.6  (body)
Relaxed:  1.7  (descriptions)
```

---

## 🎯 Spacing System

### Spacing Scale

```
XS: 0.5rem   (8px)
SM: 1rem     (16px)
MD: 1.5rem   (24px)
LG: 2rem     (32px)
XL: 3rem     (48px)
2XL: 4rem    (64px)
```

### Application

```
Padding:
- Buttons: 12-14px vertical, 24px horizontal
- Cards: 1.5rem (24px)
- Input: 14px vertical, 16px horizontal

Margins:
- Headers: 0.5rem bottom
- Sections: 2rem bottom
- Components: 1-1.5rem spacing

Gap:
- Grid: 1.5rem (24px)
- Flex: 1rem (16px)
```

---

## 🎨 Border Radius Scale

```
Small:   8px   (buttons, badges)
Medium:  12px  (input fields)
Large:   16px  (cards)
XL:      20px  (large cards, modals)
```

---

## ⬜ Shadow System (Professional Elevation)

### Shadow Scale

```
Shadow Small:
  0 1px 2px 0 rgba(15, 23, 42, 0.05)
  (subtle elevation - 1px)

Shadow Medium:
  0 4px 6px -1px rgba(15, 23, 42, 0.1)
  (card elevation - 4px)

Shadow Large:
  0 10px 15px -3px rgba(15, 23, 42, 0.1)
  (hover state - 10px)

Shadow XL:
  0 20px 25px -5px rgba(15, 23, 42, 0.1)
  (prominent elevation - 20px)
```

### Application

```
Buttons:
- Default: shadow-md
- Hover: shadow-lg
- Active: shadow-sm

Cards:
- Default: shadow-sm
- Hover: shadow-md or shadow-lg
- Elevated: shadow-xl

Inputs:
- Default: shadow-sm
- Focus: shadow-md

Headers:
- Sticky: shadow-sm
```

---

## ⏱️ Animation System

### Timing Functions

```
Fast:  150ms cubic-bezier(0.4, 0, 0.2, 1)
Base:  250ms cubic-bezier(0.4, 0, 0.2, 1)
Slow:  400ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Animation Library

```
fadeIn:
  - From: opacity 0, translateY(20px)
  - To: opacity 1, translateY(0)
  - Duration: 400ms

slideIn:
  - From: opacity 0, translateX(-20px)
  - To: opacity 1, translateX(0)
  - Duration: 250ms

slideInRight:
  - From: opacity 0, translateX(20px)
  - To: opacity 1, translateX(0)
  - Duration: 250ms

scaleIn:
  - From: opacity 0, scale(0.95)
  - To: opacity 1, scale(1)
  - Duration: 250ms
```

### Interaction Effects

```
Button Hover:
  - translateY(-2px)
  - shadow change

Card Hover:
  - translateY(-4px)
  - shadow-md → shadow-lg

Icon Hover:
  - scale(1.05 to 1.15)

Link Hover:
  - color intensity increase
```

---

## 🎪 Component Styling Guide

### Buttons

```
Primary Button:
- Background: Gradient #6D28D9 to #5B21B6
- Color: White
- Padding: 12px 24px
- Weight: 700
- Hover: gradient shift + shadow-lg + translateY(-2px)

Secondary Button:
- Background: #FFFFFF
- Border: 1.5px #CBD5E1
- Color: #0F172A
- Padding: 12px 24px
- Weight: 700
- Hover: background #F8FAFC + border-medium
```

### Input Fields

```
Default State:
- Background: #FFFFFF
- Border: 1.5px #E2E8F0
- Padding: 14px 16px
- Font: Base weight 500

Focus State:
- Border: 1.5px #6D28D9
- Shadow: 0 0 0 3px rgba(109, 40, 217, 0.1)
- Background: #FFFFFF
```

### Cards

```
Standard Card:
- Background: #FFFFFF
- Border: 1.5px #E2E8F0
- Padding: 1.5rem
- Radius: 16px
- Shadow: shadow-sm

Hover State:
- Border: 1.5px #CBD5E1
- Shadow: shadow-md
- Transform: translateY(-4px)
```

### Navigation Items

```
Default:
- Color: #475569
- Background: transparent
- Padding: 12px 14px
- Weight: 600

Hover:
- Background: #FAFBFC
- Color: #0F172A

Active:
- Background: #F0F4FF
- Color: #6D28D9
- Border Left: 3px #6D28D9
```

---

## 📊 Component Color Matrix

| Component | Primary | Hover | Active |
|-----------|---------|-------|--------|
| Button | #6D28D9 | #5B21B6 | #5B21B6 |
| Link | #6D28D9 | #5B21B6 | #5B21B6 |
| Badge (Success) | #D1FAE5 | #DBEAFE | #A7F3D0 |
| Badge (Warning) | #FEF3C7 | #FEF08A | #FCD34D |
| Border | #E2E8F0 | #CBD5E1 | #6D28D9 |

---

## 🎯 Companion Themes

### Mira (Pink)
```
Background Gradient: #EC4899 to #F472B6
Text: White
Border: rgba(236, 72, 153, 0.3)
```

### Riven (Blue)
```
Background Gradient: #3B82F6 to #60A5FA
Text: White
Border: rgba(59, 130, 246, 0.3)
```

### Aria (Purple)
```
Background Gradient: #A855F7 to #C084FC
Text: White
Border: rgba(168, 85, 247, 0.3)
```

### Timo (Green)
```
Background Gradient: #10B981 to #34D399
Text: White
Border: rgba(16, 185, 129, 0.3)
Opacity: 0.7 (Coming Soon)
```

---

## 🚀 Responsive Breakpoints

```
Mobile:     < 768px
Tablet:     768px - 1024px
Desktop:    > 1024px

Key Changes:
- 768px: Stack layouts, single column
- 1024px: Side-by-side layouts
```

---

## 🔍 Contrast Ratios

All text meets WCAG AA standards:
- Headlines: 4.5:1 contrast
- Body Text: 4.5:1 contrast
- UI Controls: 3:1 contrast

---

## 💾 CSS Custom Properties

```css
:root {
  /* Primary Colors */
  --primary-500: #7C3AED;
  --primary-600: #6D28D9;
  --primary-700: #5B21B6;
  
  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(15, 23, 42, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(15, 23, 42, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(15, 23, 42, 0.1);
  
  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 400ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## ✨ Design Tokens Summary

| Token | Value | Usage |
|-------|-------|-------|
| Primary Color | #7C3AED | Buttons, Links, Accents |
| Text Primary | #0F172A | Headlines, Body |
| Text Secondary | #475569 | Descriptions, Helper text |
| Border Light | #E2E8F0 | Cards, Inputs |
| Shadow | 4 levels | Elevation hierarchy |
| Radius | 4 sizes | Component borders |
| Spacing | 6 scales | Layout, padding, margin |

---

## 🎓 Using This Design System

1. **Colors**: Use CSS variables for consistency
2. **Typography**: Follow weight and size guidelines
3. **Spacing**: Use spacing scale for margins/padding
4. **Shadows**: Apply shadow system for elevation
5. **Animations**: Use animation library for interactions

---

**Design System Version**: 1.0 Professional  
**Last Updated**: January 21, 2026  
**Status**: Production Ready
