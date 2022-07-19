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
import '../utils/useOptionsState.js';
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
export { C as checkboxStyles } from '../Checkbox.styles.js';
import { Checkbox as Checkbox$1, CheckboxField as CheckboxField$1 } from './Checkbox.js';
import { CheckboxGroup as CheckboxGroup$1, CheckboxGroupField as CheckboxGroupField$1 } from './CheckboxGroup.js';

var Checkbox = Object.assign(Checkbox$1, {
  Formik: formikField(Checkbox$1, {
    isCheckbox: true
  }),
  ReduxForm: reduxFormField(Checkbox$1, {
    isCheckbox: true
  })
});
var CheckboxField = Object.assign(CheckboxField$1, {
  Formik: formikField(CheckboxField$1, {
    isCheckbox: true,
    hasFieldWrapper: true
  }),
  ReduxForm: reduxFormField(CheckboxField$1, {
    isCheckbox: true,
    hasFieldWrapper: true
  })
});
var CheckboxGroup = Object.assign(CheckboxGroup$1, {
  Formik: formikField(CheckboxGroup$1, {
    isCheckboxGroup: true
  }),
  ReduxForm: reduxFormField(CheckboxGroup$1, {
    isCheckboxGroup: true
  })
});
var CheckboxGroupField = Object.assign(CheckboxGroupField$1, {
  Formik: formikField(CheckboxGroupField$1, {
    isCheckboxGroup: true,
    hasFieldWrapper: true
  }),
  ReduxForm: reduxFormField(CheckboxGroupField$1, {
    isCheckboxGroup: true,
    hasFieldWrapper: true
  })
});

export { Checkbox, CheckboxField, CheckboxGroup, CheckboxGroupField };
