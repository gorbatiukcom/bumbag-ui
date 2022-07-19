import 'react';
import '../Provider/ThemeContext.js';
import 'classnames';
import '@emotion/css';
import '@emotion/react';
import '@emotion/styled';
import '../utils/useTheme.js';
import 'conditional-wrap';
import '../utils/useLocalStorage.js';
import '../_rollupPluginBabelHelpers.js';
import '../utils/omit.js';
import '../ColorMode/utils.js';
import '../ColorMode/ColorModeContext.js';
import '../utils/pick.js';
import '../utils/cssProps.js';
import 'lodash/kebabCase';
import 'tinycolor2';
import '../getCSSFromStyleObject.js';
import '../utils/isFunction.js';
import '../utils/get.js';
import '../utils/useStyle.js';
import '../utils/parseIcons.js';
import '../utils/useIcon.js';
import '../utils/omitBy.js';
import '../utils/useDefaultProps.js';
import 'lodash/uniq';
import '../utils/useClassName.js';
import 'reakit/Id';
import '../utils/uniqueId.js';
import '../utils/palette.js';
import '../utils/mergeRefs.js';
import 'deepmerge';
import 'lodash/set';
import '../utils/bindFns.js';
import '../utils/createComponent.js';
import '../utils/createElement.js';
import '../utils/createHook.js';
import 'lodash/get';
import { formikField, reduxFormField } from '../utils/fieldAdaptors.js';
import 'capsize';
import '../utils/getCapsizeStyles.js';
import '../utils/gradient.js';
import '@emotion/is-prop-valid';
import '../utils/htmlProps.js';
import '../utils/OutsideClickHandler.js';
import '../utils/getHiddenInputStyles.js';
import '../theme/palette.js';
import 'reakit';
import '../Button.styles.js';
import '../Box.styles.js';
import '../Box/Box.js';
import '../Flex.styles.js';
import '../Flex/Flex.js';
import '../Icon.styles.js';
import '../Icon/Icon.js';
import '../Text.styles.js';
import '../Text/Text.js';
import '../Text/TextBlock.js';
import '../Text/TextInline.js';
import '../Text/index.js';
import '../Spinner.styles.js';
import '../Spinner/Spinner.js';
import '../Button/Button.js';
import 'reakit/VisuallyHidden';
import '../Button/ButtonClose.js';
import '../Button/index.js';
import '../Set.styles.js';
import '../Set/Set.js';
import '../FieldWrapper.styles.js';
import '../Card.styles.js';
import '../Card/Card.js';
import '../Card/index.js';
import '../Disclosure.styles.js';
import '../Disclosure/DisclosureState.js';
import '../Disclosure/Disclosure.js';
import '../Disclosure/DisclosureContent.js';
import '../Disclosure/index.js';
import '../Label.styles.js';
import '../Label/Label.js';
import '../FieldWrapper/FieldWrapper.js';
export { S as switchStyles } from '../Switch.styles.js';
import { Switch as Switch$1, SwitchField as SwitchField$1 } from './Switch.js';
import { SwitchGroup as SwitchGroup$1, SwitchGroupField as SwitchGroupField$1 } from './SwitchGroup.js';

var Switch = Object.assign(Switch$1, {
  Formik: formikField(Switch$1, {
    isCheckbox: true
  }),
  ReduxForm: reduxFormField(Switch$1, {
    isCheckbox: true
  })
});
var SwitchField = Object.assign(SwitchField$1, {
  Formik: formikField(SwitchField$1, {
    isCheckbox: true,
    hasFieldWrapper: true
  }),
  ReduxForm: reduxFormField(SwitchField$1, {
    isCheckbox: true,
    hasFieldWrapper: true
  })
});
var SwitchGroup = Object.assign(SwitchGroup$1, {
  Formik: formikField(SwitchGroup$1, {
    isCheckboxGroup: true
  }),
  ReduxForm: reduxFormField(SwitchGroup$1, {
    isCheckboxGroup: true
  })
});
var SwitchGroupField = Object.assign(SwitchGroupField$1, {
  Formik: formikField(SwitchGroupField$1, {
    isCheckboxGroup: true,
    hasFieldWrapper: true
  }),
  ReduxForm: reduxFormField(SwitchGroupField$1, {
    isCheckboxGroup: true,
    hasFieldWrapper: true
  })
});

export { Switch, SwitchField, SwitchGroup, SwitchGroupField };
