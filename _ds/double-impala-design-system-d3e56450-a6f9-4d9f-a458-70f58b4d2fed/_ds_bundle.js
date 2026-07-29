/* @ds-bundle: {"format":4,"namespace":"DoubleImpalaDesignSystem_d3e564","components":[{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"Toast","sourcePath":"components/overlay/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/overlay/Tooltip.jsx"},{"name":"Icon","sourcePath":"components/shared/Icon.jsx"}],"sourceHashes":{"components/data/Badge.jsx":"3c2d2cf26cfd","components/data/Card.jsx":"c14f1c6fef61","components/data/Tag.jsx":"60e0bd7912bb","components/forms/Button.jsx":"8a53d1271988","components/forms/Checkbox.jsx":"9158b88b5d23","components/forms/IconButton.jsx":"7ecf2ced682e","components/forms/Input.jsx":"bba02c49fd8d","components/forms/Radio.jsx":"10d90881159c","components/forms/Select.jsx":"e1fde802ceb7","components/forms/Switch.jsx":"a90ee69ace63","components/navigation/Tabs.jsx":"5ebddc9f9d78","components/overlay/Dialog.jsx":"d61d2e59a2cc","components/overlay/Toast.jsx":"594f1619dcba","components/overlay/Tooltip.jsx":"5cd334aced77","components/shared/Icon.jsx":"697eb84d4333"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DoubleImpalaDesignSystem_d3e564 = window.DoubleImpalaDesignSystem_d3e564 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Badge.jsx
try { (() => {
const map = {
  neutral: {
    bg: 'var(--gray-700)',
    fg: 'var(--gray-100)'
  },
  primary: {
    bg: 'var(--purple-700)',
    fg: 'var(--purple-100)'
  },
  accent: {
    bg: 'var(--green-700)',
    fg: 'var(--green-100)'
  },
  success: {
    bg: 'var(--green-700)',
    fg: 'var(--green-100)'
  },
  warning: {
    bg: '#4a3313',
    fg: 'var(--amber-500)'
  },
  danger: {
    bg: '#3a1414',
    fg: 'var(--red-500)'
  }
};
function Badge({
  children,
  variant = 'neutral'
}) {
  const c = map[variant] || map.neutral;
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 10px',
      borderRadius: 'var(--radius-pill)',
      background: c.bg,
      color: c.fg,
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      fontFamily: 'var(--font-display)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  title,
  children,
  footer,
  interactive = false,
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'border-color var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    },
    onMouseEnter: e => {
      if (interactive) {
        e.currentTarget.style.borderColor = 'var(--purple-500)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }
    },
    onMouseLeave: e => {
      if (interactive) {
        e.currentTarget.style.borderColor = 'var(--border-default)';
        e.currentTarget.style.transform = 'translateY(0)';
      }
    }
  }, title && React.createElement('h3', {
    style: {
      fontSize: 'var(--text-lg)',
      margin: 0
    }
  }, title), children, footer && React.createElement('div', {
    style: {
      borderTop: '1px solid var(--border-default)',
      paddingTop: 'var(--space-4)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
const sizes = {
  sm: {
    h: 32,
    px: 12,
    fs: 'var(--text-sm)'
  },
  md: {
    h: 40,
    px: 16,
    fs: 'var(--text-base)'
  },
  lg: {
    h: 48,
    px: 22,
    fs: 'var(--text-md)'
  }
};
function variantStyle(variant) {
  switch (variant) {
    case 'secondary':
      return {
        background: 'var(--bg-surface-raised)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-default)'
      };
    case 'accent':
      return {
        background: 'var(--color-accent)',
        color: 'var(--green-950)',
        border: '1px solid transparent'
      };
    case 'outline':
      return {
        background: 'transparent',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-strong)'
      };
    case 'ghost':
      return {
        background: 'transparent',
        color: 'var(--text-secondary)',
        border: '1px solid transparent'
      };
    default:
      return {
        background: 'var(--color-primary)',
        color: 'var(--text-on-primary)',
        border: '1px solid transparent'
      };
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'leading',
  onClick,
  type = 'button',
  style
}) {
  const s = sizes[size] || sizes.md;
  return React.createElement('button', {
    type,
    disabled,
    onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: `0 ${s.px}px`,
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: s.fs,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      transition: `filter var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)`,
      ...variantStyle(variant),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.filter = 'none';
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = 'brightness(1.15)';
    }
  }, icon && iconPosition === 'leading' ? icon : null, children, icon && iconPosition === 'trailing' ? icon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  onClick,
  disabled
}) {
  const dim = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  const bg = variant === 'solid' ? 'var(--bg-surface-raised)' : 'transparent';
  return React.createElement('button', {
    onClick,
    disabled,
    'aria-label': label,
    title: label,
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      background: bg,
      border: variant === 'solid' ? '1px solid var(--border-default)' : '1px solid transparent',
      color: 'var(--text-secondary)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      transition: 'background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = 'var(--bg-surface-hover)';
      e.currentTarget.style.color = 'var(--text-primary)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = bg;
      e.currentTarget.style.color = 'var(--text-secondary)';
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  error,
  disabled,
  size = 'md'
}) {
  const h = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      height: h,
      padding: '0 14px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--bg-surface)',
      border: `1px solid ${error ? 'var(--color-danger)' : 'var(--border-default)'}`,
      color: 'var(--text-primary)',
      fontSize: 'var(--text-base)',
      outline: 'none',
      opacity: disabled ? .5 : 1
    },
    onFocus: e => e.target.style.borderColor = 'var(--border-focus)',
    onBlur: e => e.target.style.borderColor = error ? 'var(--color-danger)' : 'var(--border-default)'
  }), error && React.createElement('span', {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'var(--color-danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked,
  onChange,
  disabled
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(),
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: `1px solid ${checked ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--color-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--color-primary)' : 'var(--gray-600)',
      position: 'relative',
      transition: 'background var(--duration-base) var(--ease-standard)',
      flexShrink: 0
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: 'var(--gray-50)',
      transition: 'left var(--duration-base) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs,
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, tabs.map(t => React.createElement('button', {
    key: t.value,
    onClick: () => onChange && onChange(t.value),
    style: {
      background: 'none',
      border: 'none',
      padding: '10px 4px',
      marginRight: 'var(--space-5)',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-base)',
      color: active === t.value ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: `2px solid ${active === t.value ? 'var(--color-primary)' : 'transparent'}`,
      cursor: 'pointer',
      transition: 'color var(--duration-fast) var(--ease-standard)'
    }
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Tooltip.jsx
try { (() => {
function Tooltip({
  content,
  children,
  side = 'top'
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    bottom: {
      top: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)'
    }
  }[side] || {};
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      ...pos,
      background: 'var(--gray-50)',
      color: 'var(--gray-950)',
      fontSize: 'var(--text-xs)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-md)',
      zIndex: 50
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/shared/Icon.jsx
try { (() => {
const paths = {
  chevronDown: 'M6 9l6 6 6-6',
  x: 'M18 6L6 18M6 6l12 12',
  check: 'M20 6L9 17l-5-5',
  search: 'M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35',
  externalLink: 'M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6 M15 3h6v6 M10 14L21 3',
  github: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22',
  mail: 'M4 4h16v16H4z M22 6l-10 7L2 6',
  arrowRight: 'M5 12h14M13 6l6 6-6 6',
  info: 'M12 16v-4 M12 8h.01 M22 12a10 10 0 11-20 0 10 10 0 0120 0z',
  alertTriangle: 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z M12 9v4 M12 17h.01',
  checkCircle: 'M22 11.08V12a10 10 0 11-5.93-9.14 M22 4L12 14.01l-3-3'
};
function Icon({
  name,
  size = 18,
  strokeWidth = 2,
  style,
  ...rest
}) {
  const d = paths[name];
  if (!d) return null;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style,
    ...rest
  }, d.split(' M').map((seg, i) => React.createElement('path', {
    key: i,
    d: i === 0 ? seg : 'M' + seg
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/shared/Icon.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function Tag({
  children,
  removable,
  onRemove
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 28,
      padding: '0 12px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--bg-surface-raised)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)',
      fontFamily: 'var(--font-mono)'
    }
  }, children, removable && React.createElement('span', {
    onClick: onRemove,
    style: {
      display: 'flex',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-primary)'
    }
  }, React.createElement('span', {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      border: `1px solid ${checked ? 'var(--color-primary)' : 'var(--border-strong)'}`,
      background: checked ? 'var(--color-primary)' : 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement(__ds_scope.Icon, {
    name: 'check',
    size: 13,
    style: {
      color: 'var(--text-on-primary)'
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('span', {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-secondary)'
    }
  }, label), React.createElement('div', {
    style: {
      position: 'relative'
    }
  }, React.createElement('select', {
    value,
    disabled,
    onChange: e => onChange && onChange(e.target.value),
    style: {
      width: '100%',
      appearance: 'none',
      height: 40,
      padding: '0 36px 0 14px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--bg-surface)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
      fontSize: 'var(--text-base)',
      opacity: disabled ? .5 : 1
    }
  }, options.map(o => React.createElement('option', {
    key: o.value,
    value: o.value
  }, o.label))), React.createElement(__ds_scope.Icon, {
    name: 'chevronDown',
    size: 16,
    style: {
      position: 'absolute',
      right: 12,
      top: 12,
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  children
}) {
  if (!open) return null;
  return React.createElement('div', {
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(8,6,12,.7)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100
    },
    onClick: onClose
  }, React.createElement('div', {
    onClick: e => e.stopPropagation(),
    style: {
      width: 420,
      maxWidth: '90vw',
      background: 'var(--bg-surface-raised)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, React.createElement('h3', {
    style: {
      fontSize: 'var(--text-lg)',
      margin: 0
    }
  }, title), React.createElement('span', {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 18
  }))), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Toast.jsx
try { (() => {
const iconMap = {
  success: 'checkCircle',
  warning: 'alertTriangle',
  danger: 'alertTriangle',
  info: 'info'
};
const colorMap = {
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger: 'var(--color-danger)',
  info: 'var(--color-info)'
};
function Toast({
  message,
  variant = 'info',
  onClose
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      background: 'var(--bg-surface-raised)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-md)',
      color: 'var(--text-primary)',
      fontSize: 'var(--text-sm)',
      minWidth: 260
    }
  }, React.createElement(__ds_scope.Icon, {
    name: iconMap[variant],
    size: 18,
    style: {
      color: colorMap[variant],
      flexShrink: 0
    }
  }), React.createElement('span', {
    style: {
      flex: 1
    }
  }, message), onClose && React.createElement('span', {
    onClick: onClose,
    style: {
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, React.createElement(__ds_scope.Icon, {
    name: 'x',
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Toast.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Icon = __ds_scope.Icon;

})();
