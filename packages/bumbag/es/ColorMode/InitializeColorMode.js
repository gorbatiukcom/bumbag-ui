import { createElement } from 'react';

var noflash = "(function() { try {\n  var mode = localStorage.getItem('bb.mode');\n  if (!mode) return\n  document.getElementsByTagName('html')[0].classList.add('bb-mode-' + mode);\n} catch (e) {} })();";
function InitializeColorMode() {
  return /*#__PURE__*/createElement("script", {
    key: "bb-no-flash",
    dangerouslySetInnerHTML: {
      __html: noflash
    }
  }); // eslint-disable-line react/no-danger
}

export { InitializeColorMode };
