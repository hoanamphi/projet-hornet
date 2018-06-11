webpackJsonp([4,5],Array(249).concat([
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var gen_formDossier_page_1 = __webpack_require__(510);
var abstract_routes_1 = __webpack_require__(100);
var server_form_service_impl_1 = __webpack_require__(489);
var Form1RoutesClient = /** @class */ (function (_super) {
    tslib_1.__extends(Form1RoutesClient, _super);
    function Form1RoutesClient() {
        var _this = _super.call(this) || this;
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(gen_formDossier_page_1.FormulaireDossierPage, null, server_form_service_impl_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return Form1RoutesClient;
}(abstract_routes_1.AbstractRoutes));
exports.default = Form1RoutesClient;



/***/ }),
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var fvm_action_1 = __webpack_require__(504);
var abstract_routes_1 = __webpack_require__(100);
var server_form_service_impl_data_1 = __webpack_require__(50);
var form1_client_routes_1 = __webpack_require__(249);
var fvm_action_2 = __webpack_require__(504);
var Form1RoutesServer = /** @class */ (function (_super) {
    tslib_1.__extends(Form1RoutesServer, _super);
    function Form1RoutesServer() {
        var _this = _super.call(this) || this;
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_1.InserDossier, null, server_form_service_impl_data_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        _this.addDataRoute("/listPrefectures", function () { return new abstract_routes_1.DataRouteInfos(fvm_action_2.ListPrefecture, null, server_form_service_impl_data_1.ServerFormServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE, "post");
        return _this;
    }
    return Form1RoutesServer;
}(form1_client_routes_1.default));
exports.default = Form1RoutesServer;



/***/ }),
/* 255 */,
/* 256 */,
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(424)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(425)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var classNames = __webpack_require__(9);
var _ = __webpack_require__(6);
var dom_adapter_1 = __webpack_require__(312);
var field_error_1 = __webpack_require__(349);
var html_attributes_1 = __webpack_require__(350);
var tool_tip_1 = __webpack_require__(352);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.abstract-field");
var InlineStyle;
(function (InlineStyle) {
    InlineStyle[InlineStyle["NONE"] = 0] = "NONE";
    InlineStyle[InlineStyle["FIELD"] = 1] = "FIELD";
    InlineStyle[InlineStyle["ALL"] = 2] = "ALL";
})(InlineStyle = exports.InlineStyle || (exports.InlineStyle = {}));
/**
 * Représente un champ de formulaire.
 */
var AbstractField = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractField, _super);
    function AbstractField(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.makeState(_this.state);
        return _this;
    }
    AbstractField.prototype.componentDidMount = function () {
        this.mounted = true;
        if (this.htmlElement) {
            this.htmlElement.addEventListener("focus", this.handleSimulateScroll);
        }
        else {
            if (this.multipleElement) {
                for (var element in this.multipleElement) {
                    this.multipleElement[element].addEventListener("focus", this.handleSimulateScroll);
                }
            }
        }
    };
    AbstractField.prototype.componentWillUnmount = function () {
        this.mounted = false;
        if (this.htmlElement) {
            this.htmlElement.removeEventListener("focus", this.handleSimulateScroll);
        }
        else {
            if (this.multipleElement) {
                for (var element in this.multipleElement) {
                    this.multipleElement[element].removeEventListener("focus", this.handleSimulateScroll);
                }
            }
        }
    };
    /**
     * Génère l'état interne du composant à partir des propriétés indiquées
     * @param props
     */
    AbstractField.prototype.makeState = function (state) {
        this.processHtmlProps(state);
    };
    // Setters
    AbstractField.prototype.setAbbr = function (abbr, callback) {
        if (abbr !== this.state.abbr) {
            this.setState({ abbr: abbr }, callback);
        }
        return this;
    };
    AbstractField.prototype.setGroupClass = function (groupClass, callback) {
        if (groupClass !== this.state.groupClass) {
            this.setState({ groupClass: groupClass }, callback);
        }
        return this;
    };
    AbstractField.prototype.setLabelClass = function (labelClass, callback) {
        if (labelClass !== this.state.labelClass) {
            this.setState({ labelClass: labelClass }, callback);
        }
        return this;
    };
    AbstractField.prototype.setFieldClass = function (fieldClass, callback) {
        if (fieldClass !== this.state.fieldClass) {
            this.setState({ fieldClass: fieldClass }, callback);
        }
        return this;
    };
    AbstractField.prototype.setToolTip = function (toolTip, callback) {
        if (toolTip !== this.state.toolTip) {
            this.setState({ toolTip: toolTip }, callback);
        }
        return this;
    };
    AbstractField.prototype.setIcoToolTip = function (icoToolTip, callback) {
        if (icoToolTip !== this.state.icoToolTip) {
            this.setState({ icoToolTip: icoToolTip }, callback);
        }
        return this;
    };
    AbstractField.prototype.setPrefix = function (prefix, callback) {
        if (prefix !== this.state.prefix) {
            this.setState({ prefix: prefix }, callback);
        }
        return this;
    };
    AbstractField.prototype.setSuffix = function (suffix, callback) {
        if (suffix !== this.state.suffix) {
            this.setState({ suffix: suffix }, callback);
        }
        return this;
    };
    AbstractField.prototype.setMarkRequired = function (markRequired, callback) {
        if (this.state.markRequired === markRequired)
            return this;
        this.setState({ markRequired: markRequired }, callback);
        return this;
    };
    AbstractField.prototype.setrequiredLabel = function (requiredLabel, callback) {
        if (requiredLabel !== this.state.requiredLabel) {
            this.setState({ requiredLabel: requiredLabel }, callback);
        }
        return this;
    };
    AbstractField.prototype.setImgFilePath = function (imgFilePath, callback) {
        if (imgFilePath !== this.state.imgFilePath) {
            this.setState({ imgFilePath: imgFilePath }, callback);
        }
        return this;
    };
    AbstractField.prototype.setErrorComponent = function (errorComponent, callback) {
        this.setState({ errorComponent: errorComponent }, callback);
        return this;
    };
    AbstractField.prototype.setErrors = function (errors, callback) {
        if (!this.state.errors && !errors)
            return this;
        this.setState({ errors: errors }, callback);
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setAttribute = function (name, value) {
        _super.prototype.setAttribute.call(this, name, value);
        /* L'adaptateur DOM met à jour l'élément dans le DOM : on met ici à jour l'état interne du composant */
        var newState = {};
        newState[name] = value;
        if (newState[name] !== this.state[name]) {
            this.setState(newState);
        }
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setCurrentChecked = function (value) {
        _super.prototype.setCurrentChecked.call(this, value);
        /* L'adaptateur DOM met à jour l'élément dans le DOM : on met ici à jour l'état interne du composant */
        this.setState({ currentChecked: value });
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setCurrentValue = function (value) {
        _super.prototype.setCurrentValue.call(this, value);
        /* L'adaptateur DOM met à jour l'élément dans le DOM : on met ici à jour l'état interne du composant */
        this.setState({ currentValue: value });
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setReadOnly = function (value) {
        if (this.state.readOnly === value)
            return this;
        this.setState({ readOnly: value });
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setDisabled = function (value) {
        if (this.state.disabled === value)
            return this;
        this.setState({ disabled: value });
        return this;
    };
    AbstractField.prototype.hasErrors = function () {
        var fieldErrors = null;
        if (this.state.errors) {
            fieldErrors = this.state.errors.filter(function (error) {
                return (error.field == this.state.name || error.additionalInfos.linkedFieldsName == this.state.name);
            }, this);
        }
        if (fieldErrors && (fieldErrors.length > 0)) {
            return true;
        }
        return false;
    };
    /**
     * @inheritDoc
     */
    AbstractField.prototype.render = function () {
        var type = this.state.type;
        if (type) {
            type = type.toLowerCase();
        }
        var cx = classNames(this.state.groupClass, "abstractfield-container", {
            "inline": this.state.inline == InlineStyle.ALL,
            "readonly": this.state.readOnly
        });
        /* On ne génère pas le rendu du label et des div conteneurs lorsque le champ est caché */
        return ((type == "hidden") ? this.renderWidget() :
            React.createElement("div", { className: cx },
                this.state.label ? this.renderLabel(this.state.id, this.state.name, this.state.label, this.state.required) : null,
                this.renderField()));
    };
    /**
     * Met à jour l'état interne avec les nouvelles propriétés.
     * Surcharge la méthode parente : les attributs HTML standards sont initialisés via la fonction générique setAttribute.
     * @param nextProps nouvelles propriétés
     * @param nextContext nouveau contexte
     * @override
     */
    AbstractField.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        for (var key in nextProps) {
            /* On doit s'assurer que chaque propriété a effectivement changé, car componentWillReceiveProps peut aussi
             * être appelée alors qu'aucune propriété n'a changé (cf.http://facebook.github.io/react/blog/2016/01/08/A-implies-B-does-not-imply-B-implies-A.html)
             * Dans ce cas cela poserait problème, car l'état pourrait avaoir été modifié
             * via un setter alors que la propriété utilisée initialement pour le constructeur n'a pas changé.*/
            if (this.props[key] != nextProps[key]) {
                if (key in html_attributes_1.HTML_ATTRIBUTES) {
                    /* Propriété HTML standard */
                    this.setAttribute(key, nextProps[key]);
                }
                else {
                    /* Propriété spécifique hornet : un 'setter' est certainement présent */
                    var setterName = _.camelCase("set " + (key));
                    if (this[setterName]) {
                        this[setterName](nextProps[key]);
                    }
                    else {
                        var state = void 0;
                        state[key] = nextProps[key];
                        this.setState(state);
                    }
                }
            }
        }
    };
    /**
     * Génère le rendu des erreurs de validation éventuelles
     */
    AbstractField.prototype.renderErrors = function () {
        var fieldErrorProps = {
            errors: this.state.errors,
            fieldName: this.state.name,
            hideError: this.state.hideError
        };
        // get the field error component by state ?
        var Error = this.state.errorComponent;
        return React.createElement(Error, tslib_1.__assign({}, fieldErrorProps));
    };
    /**
     * Génère le rendu du libellé pour le champ
     * @param fieldId identifiant du champ
     * @param fieldName nom du champ
     * @param label libellé à afficher
     * @param required indique si le champ est obligatoire
     * @returns {any}
     */
    AbstractField.prototype.renderLabel = function (fieldId, fieldName, label, required) {
        var urlTheme = this.state.imgFilePath || AbstractField.genUrlTheme(), urlIcoTooltip = urlTheme + this.state.icoToolTip;
        if (this.state.abbr && !this.state.lang) {
            logger.warn("Field ", fieldName, " Must have lang with abbr configuration");
        }
        var ariaDescribedby = { "aria-describedby": fieldName + "Tooltip" };
        return (React.createElement("div", { className: this.state.labelClass + " label-container" },
            React.createElement("label", tslib_1.__assign({ htmlFor: fieldId, id: fieldName + "Label", className: "label-content" }, this.state.toolTip ? ariaDescribedby : null),
                (this.state.abbr) ?
                    React.createElement("abbr", { lang: this.state.lang, title: this.state.abbr },
                        React.createElement("span", { className: "label-abbr" }, label)) : React.createElement("span", { className: "label" }, label),
                required && this.state.markRequired ?
                    React.createElement("span", { className: "label-required" },
                        React.createElement("abbr", { title: this.getRequiredLabel() }, "*")) : null,
                this.state.toolTip ?
                    React.createElement(tool_tip_1.ToolTip, { alt: this.state.toolTip, src: urlIcoTooltip, idSpan: fieldName + "Tooltip" }) : null)));
    };
    AbstractField.prototype.getRequiredLabel = function () {
        var requiredLabel = this.state.requiredLabel;
        if (!requiredLabel) {
            var i18nRequiredLabel = this.i18n("form.requiredLabel");
            if (i18nRequiredLabel) {
                requiredLabel = i18nRequiredLabel;
            }
            else {
                requiredLabel = "Obligatoire";
            }
        }
        return requiredLabel;
    };
    /**
     * Applique certaines règles par défaut sur les propriétés HTML standards
     * @param propriétés à traiter. Cet objet est éventuellement modifié.
     */
    AbstractField.prototype.processHtmlProps = function (state) {
        if (state) {
            /* Si l'id n'est pas explicitement spécifié, on lui affecte la même valeur que le nom, car il sera utilisé
             * comme ancre pour les messages d'erreur de validation */
            if (state.name && !state.id) {
                state.id = state.name;
            }
            /* Lorsque le champ est requis, ajoute automatiquement la propriété "aria-required" pour assurer le maximum
             de compatibilité avec les outils d'accessibilité */
            // if (state.required === true) {
            //     state[ "aria-required" ] = true;
            // }
        }
    };
    /**
     * @returns {TResult} les propriétés html standard de ce champ
     */
    AbstractField.prototype.getHtmlProps = function () {
        /* On n'inclut pas les propriétés spécifiques qui ne concernent pas un champ HTML standard */
        var htmlProps = { name: "" };
        for (var key in this.state) {
            if (key in html_attributes_1.HTML_ATTRIBUTES) {
                htmlProps[key] = this.state[key];
            }
        }
        if (this.hasErrors()) {
            htmlProps["aria-describedby"] = this.state.name + "-error";
        }
        this.processHtmlProps(htmlProps);
        delete htmlProps["label"];
        return htmlProps;
    };
    /**
     * Génère le rendu des élements assurant la saisie des valeurs
     * @returns {any}
     */
    AbstractField.prototype.renderField = function () {
        return (React.createElement("div", { className: this.state.fieldClass + " abstractfield-field-content" },
            this.state.prefix ? React.createElement("span", { className: "abstractfield-field-prefix" }, this.state.prefix) : null,
            this.renderWidget(),
            this.state.suffix ? React.createElement("span", { className: "abstractfield-field-suffix" }, this.state.suffix) : null,
            this.renderErrors()));
    };
    /**
     *  Lorsque le champ prends le focus on verifie qu'il n'est pas caché par le bandeau
     *  si c'est le cas on effecteur un scroll du double de la hauteur du bandeau
     */
    AbstractField.prototype.handleSimulateScroll = function () {
        if (this.htmlElement || this.multipleElement) {
            var elementWithFocusPosTop = this.htmlElement ? this.htmlElement.getBoundingClientRect().top : this.multipleElement[0].getBoundingClientRect().top;
            var stickyElmtPos = (document.getElementById("banner")) ? document.getElementById("banner").offsetHeight : null;
            if (elementWithFocusPosTop <= stickyElmtPos) {
                window.scrollBy(0, -(window.innerHeight / 2));
            }
        }
    };
    /** Valeurs par défaut des propriétés */
    AbstractField.defaultProps = {
        /* Le libellé occupe la moitié du neoud parent */
        labelClass: "",
        /* Le champ occupe la moitié du neoud parent */
        fieldClass: "",
        icoToolTip: "/img/tooltip/tooltip.svg",
        markRequired: true,
        errorComponent: field_error_1.FieldError,
        lang: (hornet_js_utils_1.Utils.getCls("hornet.internationalization") && hornet_js_utils_1.Utils.getCls("hornet.internationalization").lang) ? hornet_js_utils_1.Utils.getCls("hornet.internationalization").lang : "fr",
        inline: InlineStyle
    };
    AbstractField.Inline = InlineStyle;
    return AbstractField;
}(dom_adapter_1.DomAdapter));
exports.AbstractField = AbstractField;



/***/ }),
/* 259 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 260 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
  copy: copy,
  checkDataType: checkDataType,
  checkDataTypes: checkDataTypes,
  coerceToTypes: coerceToTypes,
  toHash: toHash,
  getProperty: getProperty,
  escapeQuotes: escapeQuotes,
  equal: __webpack_require__(287),
  ucs2length: __webpack_require__(363),
  varOccurences: varOccurences,
  varReplace: varReplace,
  cleanUpCode: cleanUpCode,
  finalCleanUpCode: finalCleanUpCode,
  schemaHasRules: schemaHasRules,
  schemaHasRulesExcept: schemaHasRulesExcept,
  toQuotedString: toQuotedString,
  getPathExpr: getPathExpr,
  getPath: getPath,
  getData: getData,
  unescapeFragment: unescapeFragment,
  unescapeJsonPointer: unescapeJsonPointer,
  escapeFragment: escapeFragment,
  escapeJsonPointer: escapeJsonPointer
};


function copy(o, to) {
  to = to || {};
  for (var key in o) to[key] = o[key];
  return to;
}


function checkDataType(dataType, data, negate) {
  var EQUAL = negate ? ' !== ' : ' === '
    , AND = negate ? ' || ' : ' && '
    , OK = negate ? '!' : ''
    , NOT = negate ? '' : '!';
  switch (dataType) {
    case 'null': return data + EQUAL + 'null';
    case 'array': return OK + 'Array.isArray(' + data + ')';
    case 'object': return '(' + OK + data + AND +
                          'typeof ' + data + EQUAL + '"object"' + AND +
                          NOT + 'Array.isArray(' + data + '))';
    case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
                           NOT + '(' + data + ' % 1)' +
                           AND + data + EQUAL + data + ')';
    default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
  }
}


function checkDataTypes(dataTypes, data) {
  switch (dataTypes.length) {
    case 1: return checkDataType(dataTypes[0], data, true);
    default:
      var code = '';
      var types = toHash(dataTypes);
      if (types.array && types.object) {
        code = types.null ? '(': '(!' + data + ' || ';
        code += 'typeof ' + data + ' !== "object")';
        delete types.null;
        delete types.array;
        delete types.object;
      }
      if (types.number) delete types.integer;
      for (var t in types)
        code += (code ? ' && ' : '' ) + checkDataType(t, data, true);

      return code;
  }
}


var COERCE_TO_TYPES = toHash([ 'string', 'number', 'integer', 'boolean', 'null' ]);
function coerceToTypes(optionCoerceTypes, dataTypes) {
  if (Array.isArray(dataTypes)) {
    var types = [];
    for (var i=0; i<dataTypes.length; i++) {
      var t = dataTypes[i];
      if (COERCE_TO_TYPES[t]) types[types.length] = t;
      else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
    }
    if (types.length) return types;
  } else if (COERCE_TO_TYPES[dataTypes]) {
    return [dataTypes];
  } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
    return ['array'];
  }
}


function toHash(arr) {
  var hash = {};
  for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
  return hash;
}


var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var SINGLE_QUOTE = /'|\\/g;
function getProperty(key) {
  return typeof key == 'number'
          ? '[' + key + ']'
          : IDENTIFIER.test(key)
            ? '.' + key
            : "['" + escapeQuotes(key) + "']";
}


function escapeQuotes(str) {
  return str.replace(SINGLE_QUOTE, '\\$&')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\f/g, '\\f')
            .replace(/\t/g, '\\t');
}


function varOccurences(str, dataVar) {
  dataVar += '[^0-9]';
  var matches = str.match(new RegExp(dataVar, 'g'));
  return matches ? matches.length : 0;
}


function varReplace(str, dataVar, expr) {
  dataVar += '([^0-9])';
  expr = expr.replace(/\$/g, '$$$$');
  return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
}


var EMPTY_ELSE = /else\s*{\s*}/g
  , EMPTY_IF_NO_ELSE = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g
  , EMPTY_IF_WITH_ELSE = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
function cleanUpCode(out) {
  return out.replace(EMPTY_ELSE, '')
            .replace(EMPTY_IF_NO_ELSE, '')
            .replace(EMPTY_IF_WITH_ELSE, 'if (!($1))');
}


var ERRORS_REGEXP = /[^v.]errors/g
  , REMOVE_ERRORS = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g
  , REMOVE_ERRORS_ASYNC = /var errors = 0;|var vErrors = null;/g
  , RETURN_VALID = 'return errors === 0;'
  , RETURN_TRUE = 'validate.errors = null; return true;'
  , RETURN_ASYNC = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/
  , RETURN_DATA_ASYNC = 'return data;'
  , ROOTDATA_REGEXP = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g
  , REMOVE_ROOTDATA = /if \(rootData === undefined\) rootData = data;/;

function finalCleanUpCode(out, async) {
  var matches = out.match(ERRORS_REGEXP);
  if (matches && matches.length == 2) {
    out = async
          ? out.replace(REMOVE_ERRORS_ASYNC, '')
               .replace(RETURN_ASYNC, RETURN_DATA_ASYNC)
          : out.replace(REMOVE_ERRORS, '')
               .replace(RETURN_VALID, RETURN_TRUE);
  }

  matches = out.match(ROOTDATA_REGEXP);
  if (!matches || matches.length !== 3) return out;
  return out.replace(REMOVE_ROOTDATA, '');
}


function schemaHasRules(schema, rules) {
  if (typeof schema == 'boolean') return !schema;
  for (var key in schema) if (rules[key]) return true;
}


function schemaHasRulesExcept(schema, rules, exceptKeyword) {
  if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';
  for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
}


function toQuotedString(str) {
  return '\'' + escapeQuotes(str) + '\'';
}


function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
  var path = jsonPointers // false by default
              ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
              : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
  return joinPaths(currentPath, path);
}


function getPath(currentPath, prop, jsonPointers) {
  var path = jsonPointers // false by default
              ? toQuotedString('/' + escapeJsonPointer(prop))
              : toQuotedString(getProperty(prop));
  return joinPaths(currentPath, path);
}


var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function getData($data, lvl, paths) {
  var up, jsonPointer, data, matches;
  if ($data === '') return 'rootData';
  if ($data[0] == '/') {
    if (!JSON_POINTER.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
    jsonPointer = $data;
    data = 'rootData';
  } else {
    matches = $data.match(RELATIVE_JSON_POINTER);
    if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
    up = +matches[1];
    jsonPointer = matches[2];
    if (jsonPointer == '#') {
      if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
      return paths[lvl - up];
    }

    if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
    data = 'data' + ((lvl - up) || '');
    if (!jsonPointer) return data;
  }

  var expr = data;
  var segments = jsonPointer.split('/');
  for (var i=0; i<segments.length; i++) {
    var segment = segments[i];
    if (segment) {
      data += getProperty(unescapeJsonPointer(segment));
      expr += ' && ' + data;
    }
  }
  return expr;
}


function joinPaths (a, b) {
  if (a == '""') return b;
  return (a + ' + ' + b).replace(/' \+ '/g, '');
}


function unescapeFragment(str) {
  return unescapeJsonPointer(decodeURIComponent(str));
}


function escapeFragment(str) {
  return encodeURIComponent(escapeJsonPointer(str));
}


function escapeJsonPointer(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}


/***/ }),
/* 262 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(264);
var createDesc = __webpack_require__(277);
module.exports = __webpack_require__(266) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(272);
var IE8_DOM_DEFINE = __webpack_require__(327);
var toPrimitive = __webpack_require__(292);
var dP = Object.defineProperty;

exports.f = __webpack_require__(266) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 265 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(273)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(330);
var defined = __webpack_require__(293);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(2);
var factory = __webpack_require__(423);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(296)('wks');
var uid = __webpack_require__(279);
var Symbol = __webpack_require__(259).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(291);

var _extends3 = _interopRequireDefault(_extends2);

exports.getTodayTime = getTodayTime;
exports.getTitleString = getTitleString;
exports.getTodayTimeStr = getTodayTimeStr;
exports.getMonthName = getMonthName;
exports.syncTime = syncTime;
exports.getTimeConfig = getTimeConfig;
exports.isTimeValidByConfig = isTimeValidByConfig;
exports.isTimeValid = isTimeValid;
exports.isAllowedDate = isAllowedDate;

var _moment = __webpack_require__(26);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var defaultDisabledTime = {
  disabledHours: function disabledHours() {
    return [];
  },
  disabledMinutes: function disabledMinutes() {
    return [];
  },
  disabledSeconds: function disabledSeconds() {
    return [];
  }
};

function getTodayTime(value) {
  var today = (0, _moment2['default'])();
  today.locale(value.locale()).utcOffset(value.utcOffset());
  return today;
}

function getTitleString(value) {
  return value.format('LL');
}

function getTodayTimeStr(value) {
  var today = getTodayTime(value);
  return getTitleString(today);
}

function getMonthName(month) {
  var locale = month.locale();
  var localeData = month.localeData();
  return localeData[locale === 'zh-cn' ? 'months' : 'monthsShort'](month);
}

function syncTime(from, to) {
  if (!_moment2['default'].isMoment(from) || !_moment2['default'].isMoment(to)) return;
  to.hour(from.hour());
  to.minute(from.minute());
  to.second(from.second());
}

function getTimeConfig(value, disabledTime) {
  var disabledTimeConfig = disabledTime ? disabledTime(value) : {};
  disabledTimeConfig = (0, _extends3['default'])({}, defaultDisabledTime, disabledTimeConfig);
  return disabledTimeConfig;
}

function isTimeValidByConfig(value, disabledTimeConfig) {
  var invalidTime = false;
  if (value) {
    var hour = value.hour();
    var minutes = value.minute();
    var seconds = value.second();
    var disabledHours = disabledTimeConfig.disabledHours();
    if (disabledHours.indexOf(hour) === -1) {
      var disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
      if (disabledMinutes.indexOf(minutes) === -1) {
        var disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
      } else {
        invalidTime = true;
      }
    } else {
      invalidTime = true;
    }
  }
  return !invalidTime;
}

function isTimeValid(value, disabledTime) {
  var disabledTimeConfig = getTimeConfig(value, disabledTime);
  return isTimeValidByConfig(value, disabledTimeConfig);
}

function isAllowedDate(value, disabledDate, disabledTime) {
  if (disabledDate) {
    if (disabledDate(value)) {
      return false;
    }
  }
  if (disabledTime) {
    if (!isTimeValid(value, disabledTime)) {
      return false;
    }
  }
  return true;
}

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(259);
var core = __webpack_require__(262);
var ctx = __webpack_require__(326);
var hide = __webpack_require__(263);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(265);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(333);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(450);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(454);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(333);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(329);
var enumBugKeys = __webpack_require__(297);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 279 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 280 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(3);
var ReactDOM = __webpack_require__(22);
/**
 * Champ de formulaire Hornet de type Checkbox
 */
var CheckBox = /** @class */ (function (_super) {
    tslib_1.__extends(CheckBox, _super);
    function CheckBox(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.checked = _this.props.checked;
        return _this;
    }
    /**
     * @inheritDoc
     */
    CheckBox.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var checkbox = ReactDOM.findDOMNode(this.inputRef);
        checkbox.checked = this.checked;
    };
    /**
     * @inheritDoc
     */
    CheckBox.prototype.componentWillReceiveProps = function (nextProps, nextState) {
        this.checked = nextProps.checked;
        var checkbox = ReactDOM.findDOMNode(this.inputRef);
        if (checkbox) {
            checkbox.checked = this.checked;
        }
    };
    /**
     * @inheritDoc
     */
    CheckBox.prototype.render = function () {
        var _this = this;
        var labelProps = {
            className: "checkbox-content",
            disabled: this.props.disabled,
            title: this.props.title
        };
        var inputProps = {
            onChange: this.onChange,
            title: this.props.title,
            name: this.props.name,
            id: this.props.id
        };
        return (React.createElement("label", tslib_1.__assign({}, labelProps, { onKeyDown: this.onClick }),
            React.createElement("input", tslib_1.__assign({ type: "checkbox", value: "true" }, inputProps, { ref: function (ref) { _this.inputRef = ref; } })),
            React.createElement("span", { className: "checkbox-material" },
                React.createElement("span", { className: "check" })),
            (this.state.label) ? this.state.label : ""));
    };
    /**
     * fonction appelée au clic sur la checkbox
     * @param e
     */
    CheckBox.prototype.onClick = function (e) {
        var checkbox = ReactDOM.findDOMNode(this.inputRef);
        checkbox.checked = !checkbox.checked;
    };
    /**
     * fonction appelée au changement de valeur de la checkbox
     * @param e
     */
    CheckBox.prototype.onChange = function (e) {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };
    return CheckBox;
}(hornet_component_1.HornetComponent));
exports.CheckBox = CheckBox;



/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
/**
 * Enumération des sens de tri de tableau
 * @enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["ASC"] = 0] = "ASC";
    SortDirection[SortDirection["DESC"] = 1] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
/***
 * @description Classe de configuration pour le lancement d'un tri
 * @interface
  */
var SortData = /** @class */ (function () {
    /***
     * @param {string} key Clé de la colonnne sur laquelle le tri est effectué
     * @param {SortDirection} dir Sens du tri
     */
    function SortData(key, dir) {
        if (dir === void 0) { dir = SortDirection.ASC; }
        this.key = key;
        this.dir = dir;
    }
    return SortData;
}());
exports.SortData = SortData;



/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(42)
  , equal = __webpack_require__(287)
  , util = __webpack_require__(261)
  , SchemaObject = __webpack_require__(317)
  , traverse = __webpack_require__(364);

module.exports = resolve;

resolve.normalizeId = normalizeId;
resolve.fullPath = getFullPath;
resolve.url = resolveUrl;
resolve.ids = resolveIds;
resolve.inlineRef = inlineRef;
resolve.schema = resolveSchema;

/**
 * [resolve and compile the references ($ref)]
 * @this   Ajv
 * @param  {Function} compile reference to schema compilation funciton (localCompile)
 * @param  {Object} root object with information about the root schema for the current schema
 * @param  {String} ref reference to resolve
 * @return {Object|Function} schema object (if the schema can be inlined) or validation function
 */
function resolve(compile, root, ref) {
  /* jshint validthis: true */
  var refVal = this._refs[ref];
  if (typeof refVal == 'string') {
    if (this._refs[refVal]) refVal = this._refs[refVal];
    else return resolve.call(this, compile, root, refVal);
  }

  refVal = refVal || this._schemas[ref];
  if (refVal instanceof SchemaObject) {
    return inlineRef(refVal.schema, this._opts.inlineRefs)
            ? refVal.schema
            : refVal.validate || this._compile(refVal);
  }

  var res = resolveSchema.call(this, root, ref);
  var schema, v, baseId;
  if (res) {
    schema = res.schema;
    root = res.root;
    baseId = res.baseId;
  }

  if (schema instanceof SchemaObject) {
    v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
  } else if (schema !== undefined) {
    v = inlineRef(schema, this._opts.inlineRefs)
        ? schema
        : compile.call(this, schema, root, undefined, baseId);
  }

  return v;
}


/**
 * Resolve schema, its root and baseId
 * @this Ajv
 * @param  {Object} root root object with properties schema, refVal, refs
 * @param  {String} ref  reference to resolve
 * @return {Object} object with properties schema, root, baseId
 */
function resolveSchema(root, ref) {
  /* jshint validthis: true */
  var p = url.parse(ref, false, true)
    , refPath = _getFullPath(p)
    , baseId = getFullPath(this._getId(root.schema));
  if (refPath !== baseId) {
    var id = normalizeId(refPath);
    var refVal = this._refs[id];
    if (typeof refVal == 'string') {
      return resolveRecursive.call(this, root, refVal, p);
    } else if (refVal instanceof SchemaObject) {
      if (!refVal.validate) this._compile(refVal);
      root = refVal;
    } else {
      refVal = this._schemas[id];
      if (refVal instanceof SchemaObject) {
        if (!refVal.validate) this._compile(refVal);
        if (id == normalizeId(ref))
          return { schema: refVal, root: root, baseId: baseId };
        root = refVal;
      } else {
        return;
      }
    }
    if (!root.schema) return;
    baseId = getFullPath(this._getId(root.schema));
  }
  return getJsonPointer.call(this, p, baseId, root.schema, root);
}


/* @this Ajv */
function resolveRecursive(root, ref, parsedRef) {
  /* jshint validthis: true */
  var res = resolveSchema.call(this, root, ref);
  if (res) {
    var schema = res.schema;
    var baseId = res.baseId;
    root = res.root;
    var id = this._getId(schema);
    if (id) baseId = resolveUrl(baseId, id);
    return getJsonPointer.call(this, parsedRef, baseId, schema, root);
  }
}


var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
/* @this Ajv */
function getJsonPointer(parsedRef, baseId, schema, root) {
  /* jshint validthis: true */
  parsedRef.hash = parsedRef.hash || '';
  if (parsedRef.hash.slice(0,2) != '#/') return;
  var parts = parsedRef.hash.split('/');

  for (var i = 1; i < parts.length; i++) {
    var part = parts[i];
    if (part) {
      part = util.unescapeFragment(part);
      schema = schema[part];
      if (schema === undefined) break;
      var id;
      if (!PREVENT_SCOPE_CHANGE[part]) {
        id = this._getId(schema);
        if (id) baseId = resolveUrl(baseId, id);
        if (schema.$ref) {
          var $ref = resolveUrl(baseId, schema.$ref);
          var res = resolveSchema.call(this, root, $ref);
          if (res) {
            schema = res.schema;
            root = res.root;
            baseId = res.baseId;
          }
        }
      }
    }
  }
  if (schema !== undefined && schema !== root.schema)
    return { schema: schema, root: root, baseId: baseId };
}


var SIMPLE_INLINED = util.toHash([
  'type', 'format', 'pattern',
  'maxLength', 'minLength',
  'maxProperties', 'minProperties',
  'maxItems', 'minItems',
  'maximum', 'minimum',
  'uniqueItems', 'multipleOf',
  'required', 'enum'
]);
function inlineRef(schema, limit) {
  if (limit === false) return false;
  if (limit === undefined || limit === true) return checkNoRef(schema);
  else if (limit) return countKeys(schema) <= limit;
}


function checkNoRef(schema) {
  var item;
  if (Array.isArray(schema)) {
    for (var i=0; i<schema.length; i++) {
      item = schema[i];
      if (typeof item == 'object' && !checkNoRef(item)) return false;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return false;
      item = schema[key];
      if (typeof item == 'object' && !checkNoRef(item)) return false;
    }
  }
  return true;
}


function countKeys(schema) {
  var count = 0, item;
  if (Array.isArray(schema)) {
    for (var i=0; i<schema.length; i++) {
      item = schema[i];
      if (typeof item == 'object') count += countKeys(item);
      if (count == Infinity) return Infinity;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return Infinity;
      if (SIMPLE_INLINED[key]) {
        count++;
      } else {
        item = schema[key];
        if (typeof item == 'object') count += countKeys(item) + 1;
        if (count == Infinity) return Infinity;
      }
    }
  }
  return count;
}


function getFullPath(id, normalize) {
  if (normalize !== false) id = normalizeId(id);
  var p = url.parse(id, false, true);
  return _getFullPath(p);
}


function _getFullPath(p) {
  var protocolSeparator = p.protocol || p.href.slice(0,2) == '//' ? '//' : '';
  return (p.protocol||'') + protocolSeparator + (p.host||'') + (p.path||'')  + '#';
}


var TRAILING_SLASH_HASH = /#\/?$/;
function normalizeId(id) {
  return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
}


function resolveUrl(baseId, id) {
  id = normalizeId(id);
  return url.resolve(baseId, id);
}


/* @this Ajv */
function resolveIds(schema) {
  var schemaId = normalizeId(this._getId(schema));
  var baseIds = {'': schemaId};
  var fullPaths = {'': getFullPath(schemaId, false)};
  var localRefs = {};
  var self = this;

  traverse(schema, {allKeys: true}, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (jsonPtr === '') return;
    var id = self._getId(sch);
    var baseId = baseIds[parentJsonPtr];
    var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
    if (keyIndex !== undefined)
      fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util.escapeFragment(keyIndex));

    if (typeof id == 'string') {
      id = baseId = normalizeId(baseId ? url.resolve(baseId, id) : id);

      var refVal = self._refs[id];
      if (typeof refVal == 'string') refVal = self._refs[refVal];
      if (refVal && refVal.schema) {
        if (!equal(sch, refVal.schema))
          throw new Error('id "' + id + '" resolves to more than one schema');
      } else if (id != normalizeId(fullPath)) {
        if (id[0] == '#') {
          if (localRefs[id] && !equal(sch, localRefs[id]))
            throw new Error('id "' + id + '" resolves to more than one schema');
          localRefs[id] = sch;
        } else {
          self._refs[id] = fullPath;
        }
      }
    }
    baseIds[jsonPtr] = baseId;
    fullPaths[jsonPtr] = fullPath;
  });

  return localRefs;
}


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  var arrA = isArray(a)
    , arrB = isArray(b)
    , i
    , length
    , key;

  if (arrA && arrB) {
    length = a.length;
    if (length != b.length) return false;
    for (i = 0; i < length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  var dateA = a instanceof Date
    , dateB = b instanceof Date;
  if (dateA != dateB) return false;
  if (dateA && dateB) return a.getTime() == b.getTime();

  var regexpA = a instanceof RegExp
    , regexpB = b instanceof RegExp;
  if (regexpA != regexpB) return false;
  if (regexpA && regexpB) return a.toString() == b.toString();

  if (a instanceof Object && b instanceof Object) {
    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = 0; i < length; i++)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = 0; i < length; i++) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return false;
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve = __webpack_require__(286);

module.exports = {
  Validation: errorSubclass(ValidationError),
  MissingRef: errorSubclass(MissingRefError)
};


function ValidationError(errors) {
  this.message = 'validation failed';
  this.errors = errors;
  this.ajv = this.validation = true;
}


MissingRefError.message = function (baseId, ref) {
  return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
};


function MissingRefError(baseId, ref, message) {
  this.message = message || MissingRefError.message(baseId, ref);
  this.missingRef = resolve.url(baseId, ref);
  this.missingSchema = resolve.normalizeId(resolve.fullPath(this.missingRef));
}


function errorSubclass(Subclass) {
  Subclass.prototype = Object.create(Error.prototype);
  Subclass.prototype.constructor = Subclass;
  return Subclass;
}


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  metaSchemaRef: metaSchemaRef
};

var META_SCHEMA_ID = 'http://json-schema.org/draft-06/schema';

function metaSchemaRef(ajv) {
  var defaultMeta = ajv._opts.defaultMeta;
  if (typeof defaultMeta == 'string') return { $ref: defaultMeta };
  if (ajv.getSchema(META_SCHEMA_ID)) return { $ref: META_SCHEMA_ID };
  console.warn('meta schema not defined');
  return {};
}


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(258);
var picto_1 = __webpack_require__(96);
var _ = __webpack_require__(6);
var classNames = __webpack_require__(9);
var hornet_event_1 = __webpack_require__(7);
var event_1 = __webpack_require__(325);
var InputField = /** @class */ (function (_super) {
    tslib_1.__extends(InputField, _super);
    function InputField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     * @override
     */
    InputField.prototype.renderWidget = function () {
        var _this = this;
        var htmlProps = _.cloneDeep(this.getHtmlProps());
        if (this.state.currentValue != null) {
            _.assign(htmlProps, { "defaultValue": this.props.currentValue });
        }
        var inputClasses = {
            "has-error": this.hasErrors(),
            "input": true
        };
        if (htmlProps["className"]) {
            inputClasses[htmlProps["className"]] = true;
        }
        if (this.state.alignment) {
            inputClasses[this.state.alignment] = true;
        }
        htmlProps["onChange"] = this.state.resettable ? this.handleChangeInput : htmlProps["onChange"];
        htmlProps["className"] = classNames(inputClasses);
        return (React.createElement("div", null,
            React.createElement("input", tslib_1.__assign({ ref: function (elt) { return _this.registerHtmlElement(elt); } }, htmlProps)),
            this.state.resettable && this.state.valued && !this.state.readOnly && !this.state.disabled ? this.renderResetButton() :
                React.createElement("div", null)));
    };
    /**
     * Surcharge de la méthode
     * @param value
     * @returns {InputField}
     */
    InputField.prototype.setCurrentValue = function (value) {
        _super.prototype.setCurrentValue.call(this, value);
        this.setState({ valued: (value !== "" && value) });
        return this;
    };
    InputField.prototype.isValued = function () {
        return this.state.valued || this.props.value;
    };
    /**
     * rendu html du bouton reset
     * @returns {any}
     */
    InputField.prototype.renderResetButton = function () {
        var htmlProps = _.cloneDeep(this.getHtmlProps());
        var hidden = htmlProps["type"] === "hidden";
        var classList = {
            "input-reset": true,
            "input-reset-hidden": (!this.isValued() || hidden)
        };
        var aProps = {};
        if (this.isValued()) {
            aProps["onClick"] = this.resetValue;
        }
        var prefixID = this.props.id || this.props.name;
        return (React.createElement("span", { className: classNames(classList), role: "button", "aria-hidden": !this.state.valued, id: prefixID + "ResetButton" },
            React.createElement("a", tslib_1.__assign({}, aProps),
                React.createElement("img", { src: picto_1.Picto.grey.close, alt: this.i18n("inputField.messageBtn"), title: this.i18n("inputField.messageBtn") }))));
    };
    /**
     * Permet de rendre à null la valeur du champ et de masquer la colonne
     */
    InputField.prototype.resetValue = function () {
        this.htmlElement.value = null;
        if (this.htmlElement && this.htmlElement.onchange)
            this.htmlElement.onchange();
        hornet_event_1.fireHornetEvent(event_1.VALUE_CHANGED_EVENT.withData(this.htmlElement));
        this.setState({ valued: false });
    };
    /**
     * Action exécutée lors d'un changement de valeur du champ
     * @param e
     */
    InputField.prototype.handleChangeInput = function (e) {
        if (this.htmlElement && this.htmlElement.value) {
            if (!this.state.valued) {
                this.setState({ valued: true });
            }
        }
        else if (this.state.valued) {
            this.setState({ valued: false });
        }
        var htmlProps = this.getHtmlProps();
        if (_.isFunction(htmlProps["onChange"])) {
            htmlProps["onChange"](e);
        }
    };
    InputField.defaultProps = _.assign({ type: "text", resettable: true }, abstract_field_1.AbstractField.defaultProps);
    return InputField;
}(abstract_field_1.AbstractField));
exports.InputField = InputField;



/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(415);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(265);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 293 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 294 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(296)('keys');
var uid = __webpack_require__(279);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(259);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 297 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 298 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 299 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(272);
var dPs = __webpack_require__(433);
var enumBugKeys = __webpack_require__(297);
var IE_PROTO = __webpack_require__(295)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(328)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(434).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(264).f;
var has = __webpack_require__(260);
var TAG = __webpack_require__(269)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(269);


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(259);
var core = __webpack_require__(262);
var LIBRARY = __webpack_require__(299);
var wksExt = __webpack_require__(303);
var defineProperty = __webpack_require__(264).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 305 */,
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var events = __webpack_require__(27);
var _ = __webpack_require__(6);
var promise_api_1 = __webpack_require__(51);
var technical_error_1 = __webpack_require__(13);
var codes_error_1 = __webpack_require__(98);
var object_utils_1 = __webpack_require__(315);
var datasource_option_1 = __webpack_require__(357);
var datasource_config_1 = __webpack_require__(358);
var datasource_config_page_1 = __webpack_require__(316);
var DataSourceStatus;
(function (DataSourceStatus) {
    DataSourceStatus[DataSourceStatus["Dummy"] = 0] = "Dummy";
    DataSourceStatus[DataSourceStatus["Initialized"] = 1] = "Initialized";
})(DataSourceStatus = exports.DataSourceStatus || (exports.DataSourceStatus = {}));
/***
 * @classdesc Classe de base des datasources
 * elle contient une methode pour récupérer des datas, varie selon le type de datasource;
 * elle implémente une methode qui transforme les données récupérées selon une classe de mapping  {@link DataSourceMap} afin de l'exploiter directement par l'IHM.
 * liste des events déclenchés par le datasource lorsque les opérations sont effectuées:
 * -init
 * -fetch
 * -add
 * -delete
 * -select
 * -sort
 * -filter
 * -error see{@link CodesError.DATASOURCE*}
 * @class
 * @extends EventEmitter
 */
var DataSource = /** @class */ (function (_super) {
    tslib_1.__extends(DataSource, _super);
    /***
     * @param {DataSourceConfig|DataSourceConfigPage|Array<T>}
     *        config : accepte soit une liste de l'éléments Array<T>, soit un service DataSourceConfig | DataSourceConfigPage
     * @param {DataSourceMap} keysMap  : utilisée pour la transformation des resultats du fetch.
     * @param {DataSourceOption[]} options : liste de paramètres supplémentaires à transmettre au fetch
     * Pour un config de type
     */
    function DataSource(config, keysMap, options) {
        if (keysMap === void 0) { keysMap = {}; }
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.keysMap = keysMap;
        _this.options = options;
        /***
         * tableau de résultats du datasource
         * @instance
         */
        _this.datasourceResults = [];
        /***
         * backup des résultats du datasource
         * @instance
         */
        _this._results_backup = [];
        /***
         * mode filtre
         * @instance
         */
        _this._filtering_flag = false;
        /**
         * Indique si le datasource courant est de type DataSourceArray.
         */
        _this.isDataSourceArray = false;
        /**
         * Sauvegarde des argument du fetch pour rejouer lors du tri
         */
        _this.fetchArgsSaved = null;
        /**
         * nom des argument du fetch pour rejouer lors du tri en lui ajoutant le sortData
         */
        _this.fetchAttrName = "criteres";
        _this._status = DataSourceStatus.Dummy;
        _this.config = config;
        if (!_this.config) {
            _this.config = [];
        }
        if (_this.config instanceof datasource_config_1.DataSourceConfig) {
            _this.scope = _this.config.scope;
            _this.method = _this.config.scope[_this.config.methodName];
            _this.fetchAttrName = _this.config.fetchAttrName || "criteres";
        }
        if (_this.config instanceof datasource_config_page_1.DataSourceConfigPage) {
            _this.scope = _this.config.page.getService();
            _this.method = _this.config.method;
            _this.fetchAttrName = _this.config.fetchAttrName || "criteres";
        }
        if (_this.config instanceof Array) {
            _this.isDataSourceArray = true;
            _this.init();
        }
        var init = _.find(options, function (option) {
            return option instanceof datasource_option_1.InitAsync;
        });
        var sort = _.find(options, function (option) {
            return option instanceof datasource_option_1.DefaultSort;
        });
        _this.defaultSort = sort ? sort : null;
        _this.initAsync = init ? init : null;
        return _this;
    }
    /***
     * Méthode qui déclenche un fetch appelé pour initialiser un datasource.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * Déchenche un event init
     */
    DataSource.prototype.init = function (args) {
        (this.initAsync && this.initAsync.isAsync) ? this.initData(args) : this.initDataSync(args);
    };
    /***
     * Méthode qui déclenche un fetch appelé pour initialiser un datasource.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * Déchenche un event init
     */
    DataSource.prototype.initDataSync = function (args) {
        var _this = this;
        if (this.isDataSourceArray) {
            this.addDataSync(false, this.config);
            //nettoyage
            this.config = [];
            this.emit("init", this.results);
            this._status = DataSourceStatus.Initialized;
            return this.results;
        }
        else {
            this.fetchData(false, args).then(function () {
                _this.emit("init", _this.results);
                _this._status = DataSourceStatus.Initialized;
                return _this.results;
            });
        }
    };
    /***
     * Méthode qui déclenche un fetch appelé pour initialiser un datasource.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * Déchenche un event init
     */
    DataSource.prototype.initData = function (args) {
        var _this = this;
        return this.isDataSourceArray ? this.addData(false, this.config).then(function () {
            //nettoyage
            _this.config = [];
            _this.emit("init", _this.results);
            _this._status = DataSourceStatus.Initialized;
            return _this.results;
        }).catch(function (error) {
            throw error;
        }) : this.fetchData(false, args).then(function () {
            _this.emit("init", _this.results);
            _this._status = DataSourceStatus.Initialized;
            return _this.results;
        });
    };
    /**
     * On considère que les données sont dèjà présentes dans le datasource, on envoie juste l'event fetch au composant
     * pour forcer le rendu avec ses anciennes données.
     */
    DataSource.prototype.reload = function () {
        var _this = this;
        promise_api_1.Promise.resolve().then(function () {
            _this.emit("fetch", _this.results);
        });
    };
    Object.defineProperty(DataSource.prototype, "selected", {
        /**
         * renvoie la valeur selectionnée courante.
         */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    /***
    * Méthode qui retourne des items du result d'un datasource.
    * {@link https://lodash.com/docs/#every}
    * @param criteria
    * @return renvoie les éléments trouvés
    */
    DataSource.prototype.findAll = function (criteria) {
        return _.filter(this.results, criteria);
    };
    /**
     * supprime l'item du dataSource
     * @param item
     */
    DataSource.prototype.removeUnSelectedItem = function (item) {
        if (!item)
            return;
        if (this._selected instanceof Array) {
            _.remove(this._selected, item);
        }
        else {
            if (item === this._selected) {
                this._selected = undefined;
            }
        }
    };
    Object.defineProperty(DataSource.prototype, "results", {
        /**
         * renvoie le tableau des résultats.
         */
        get: function () {
            return this.datasourceResults;
        },
        /**
         * enregistre les résultats dans le datasource
         * @param {any[]} results les données du data source (post-transformation {@link DataSource#transformData}).
         */
        set: function (results) {
            this.datasourceResults = results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * renvoie le tri par defaut
     */
    DataSource.prototype.getDefaultSort = function () {
        return this.defaultSort;
    };
    /***
     * Méthode qui implémente la méthode de récupération des datas (une par type de datasource)
     * Déchenche un event fetch
     * @param {Boolean} triggerFetch  déclenche un évènement "fetch" après l'opération si true.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * @param {boolean} noSave indicateur pour sauvegarder ou non les paramètres du fetch pour les rejouer sur un sort service
     * @example
     * dataSource.on("fetch", (MappedResult)=>{
     *       //staff
     *   })
     * dataSource.fetch();
     * @void
     */
    DataSource.prototype.fetch = function (triggerFetch, args, noSave) {
        //suppression de l'historique de selection
        // le mae n'est pas prêt...
        this.selectClean(!noSave);
        if (!noSave) {
            this.fetchArgsSaved = args;
        }
        this.fetchData(triggerFetch, args);
    };
    /***
     * Méthode qui déclenche les events
     **/
    DataSource.prototype.emitEvent = function (name) {
        var _this = this;
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        if (this._status === DataSourceStatus.Dummy) {
            this._status = DataSourceStatus.Initialized;
        }
        setTimeout(function () {
            _this.emit.apply(_this, [name].concat(arg));
        }, 0);
    };
    /***
     * Méthode qui implémente la méthode de récupération des datas (une par type de datasource)
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {any[]} ...args paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * @return {T} une promesse de type result de T.
     * @example
     * dataSource.on("fetch", (MappedResult)=>{
     *       //staff
     *   })
     * dataSource.fetch();
     * @void
     */
    DataSource.prototype.fetchData = function (triggerFetch, args) {
        var _this = this;
        this.emit("loadingData", true);
        var fetchOptions = _.filter(this.options, function (option) {
            return option.sendToFetch();
        });
        var fetchArgs = (typeof args !== "undefined") ? [args].concat(fetchOptions) : fetchOptions;
        var p = this.isDataSourceArray ?
            //déclenchement de l'event fetch (si demandé) avec le result du data source en datasourceArray
            promise_api_1.Promise.resolve().then(function () {
                if (triggerFetch) {
                    if (_this.defaultSort && !(args && args["sort"])) {
                        var options = { sortDatas: _this.defaultSort.sort, compare: _this.defaultSort };
                        _this.sortData(options);
                    }
                    _this.emit("fetch", _this.results);
                }
                else {
                    return false;
                }
            }) :
            //déclenchement de l'event fetch (si demandé) avec datasourceService
            //après la requete de service, une transformation sera appliquée sur les données récoltées
            this.method.apply(this.scope, fetchArgs)
                .then(function (result) {
                return _this.transformData([result]).then(function (res) {
                    //affectation des data dans le result du datasource
                    _this.results = res;
                    var args = fetchArgs[0];
                    if (_this.defaultSort && !(args && args["sort"])) {
                        var options = { sortDatas: _this.defaultSort.sort, compare: _this.defaultSort };
                        _this.sortData(options);
                    }
                    triggerFetch ? _this.emit("fetch", _this.results) : null;
                    return _this.results;
                }).catch(function (e) {
                    var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_FETCH_ERROR, null, e);
                    _this.emit("error", error);
                });
            });
        return p.finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Ajout un élément ou des éléments au result du datasource
     * cette action déclenche l'évènement add.
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @example
     * dataSource.on("add", (IncreasedResult)=>{
     *       //staff
     *   })
     * dataSource.add();
     * @void
     */
    DataSource.prototype.add = function (triggerFetch) {
        var _this = this;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.addData.apply(this, [triggerFetch].concat(items)).then(function (result) {
            _this.emit("add", result);
            return _this.results;
        }).catch(function (e) {
            var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_ADD_ERROR, null, e);
            _this.emit("error", error);
        });
    };
    /***
     * Ajout un élément ou des éléments au result du datasource
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @return une promise du result modifié
     */
    DataSource.prototype.addData = function (triggerFetch) {
        var _this = this;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.emit("loadingData", true);
        return promise_api_1.Promise.resolve().then(function () {
            return _this.transformData(items).then(function (result) {
                try {
                    _this.datasourceResults = _this.datasourceResults.concat(result);
                    if (_this.defaultSort) {
                        var options = { sortDatas: _this.defaultSort.sort, compare: _this.defaultSort };
                        _this.sortData(options);
                    }
                    if (triggerFetch)
                        _this.emit("fetch", _this.results);
                    return _this.datasourceResults;
                }
                catch (e) {
                    var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_ADD_ERROR, null, e);
                    _this.emit("error", error);
                }
            });
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Ajout un élément ou des éléments au result du datasource
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @return {any[]} result modifié
     */
    DataSource.prototype.addDataSync = function (triggerFetch) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.emit("loadingData", true);
        var res = null;
        try {
            var result = this.transformDataSync(items);
            this.datasourceResults = this.datasourceResults.concat(result);
            if (this.defaultSort) {
                var options = { sortDatas: this.defaultSort.sort, compare: this.defaultSort };
                this.sortData(options);
            }
            if (triggerFetch)
                this.emit("fetch", this.results);
            res = this.datasourceResults;
        }
        catch (e) {
            var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_ADD_ERROR, null, e);
            this.emit("error", error);
        }
        this.emit("loadingData", false);
        return res;
    };
    /***
     * enlève un élément ou des éléments au result du datasource
     * cette action déclenche l'évènement delete
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @void
     */
    DataSource.prototype.delete = function (triggerFetch) {
        var _this = this;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.deleteData.apply(this, [triggerFetch].concat(items)).then(function (result) {
            _this.emit("delete", result);
            return _this.results;
        }).catch(function (e) {
            var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_DELETE_ERROR, null, e);
            _this.emit("error", error);
        });
    };
    /**
     * supprime toutes les données du datasource.
     */
    DataSource.prototype.deleteAll = function () {
        this.selectClean(true);
        this.results = [];
        this.emit("delete", this.results);
    };
    /***
     * enlève un élément ou des éléments au result du datasource
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à supprimer, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @return {Promise<Array<<any>>} une promise du result modifié
     */
    DataSource.prototype.deleteData = function (triggerFetch) {
        var _this = this;
        if (triggerFetch === void 0) { triggerFetch = false; }
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.emit("loadingData", true);
        return promise_api_1.Promise.resolve().then(function () {
            return _this.transformData(items).then(function (result) {
                _.map(result, function (item) {
                    _.remove(_this.datasourceResults, item);
                });
                if (triggerFetch)
                    _this.emit("fetch", _this.results);
                return _this.results;
            }).catch(function (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_DELETE_ERROR, null, e);
                _this.emit("error", error);
            });
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /**
     * permet de normaliser les elements du spread
     * @param {(T|T[])[]} data : les paramètres à normaliser
     */
    DataSource.prototype.getSpreadValues = function (data) {
        var _data = data;
        if (_data.length == 0)
            return [];
        //for spread operator
        if (_data[0] instanceof Array) {
            _data = _data[0];
        }
        return _data;
    };
    /***
     * méthode qui convertie les données brutes en données exploitable par l'IHM.
     * @param {(T|T[])[]} data les données brutes.
     * @return {Promise<Array<<any>>} renvoie les données transformées à partir des données brutes et la classe de mapping  {@link DataSourceMap}
     */
    DataSource.prototype.transformData = function (data) {
        var _this = this;
        return promise_api_1.Promise.resolve().then(function () {
            return _this.transformDataSync(data);
        });
    };
    /***
     * méthode qui convertie les données brutes en données exploitable par l'IHM.
     * @param {(T|T[])[]} data les données brutes.
     * @return {Array<any>} renvoie les données transformées à partir des données brutes et la classe de mapping  {@link DataSourceMap}
     */
    DataSource.prototype.transformDataSync = function (data) {
        var _this = this;
        if (data["errors"]) {
            var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_RESPONSE_ERROR, data["errors"]);
            this.emit("error", error);
            throw error;
        }
        var _data = this.getSpreadValues(data);
        if (!this.keysMap || Object.keys(this.keysMap) == 0) {
            return _data;
        }
        return _data.map(function (item) {
            if (item) {
                var resultKeys_1 = {};
                Object.keys(_this.keysMap).map(function (key) {
                    resultKeys_1[key] = object_utils_1.ObjectUtils.getSubObject(item, _this.keysMap[key]);
                });
                return resultKeys_1;
            }
        });
    };
    /**
     * Fonction de tri
     * @param {SortData[]} sort  données de tri
     * @param {(a: any, b: any) => number} Fonction de comparaison.
     */
    DataSource.prototype.sortData = function (options) {
        if (options.compare) {
            var exec = options.compare;
            if (options.compare.compare) {
                exec = options.compare.compare;
            }
            if (options.compare.initCompare) {
                if (typeof options.compare.initCompare == "function") {
                    exec = options.compare.initCompare;
                }
                else {
                    exec = options.compare.getCompareFunction(options.compare.initCompare);
                }
            }
            this.results = this.results.sort(exec.bind(options.sortDatas, options.sortDatas));
        }
        else {
            var keys = [];
            var directions = [];
            for (var i = 0; i < options.sortDatas.length; i++) {
                keys.push(options.sortDatas[i].key);
                directions.push(options.sortDatas[i].dir ? "desc" : "asc");
            }
            this.results = _.orderBy(this.results, keys, directions);
        }
    };
    /***
     * Fonction de tri
     * @param {SortData[]} sortData.
     * @param {(a: any, b: any) => number} Fonction de comparaison.
     * @example
     * dataSource.on("sort", (SortedResult)=>{
     *       //staff
     *   })
     * dataSource.sort(sortData);
     * @void
     */
    DataSource.prototype.sort = function (options) {
        var _this = this;
        this.emit("loadingData", true);
        promise_api_1.Promise.resolve().then(function () {
            try {
                if (_this.isDataSourceArray) {
                    if (_this.defaultSort)
                        _this.defaultSort.sort = options.sortDatas;
                    options.compare = options.compare || _this.defaultSort;
                    _this.sortData(options);
                    _this.emitEvent("sort", _this.results, options.sortDatas);
                    return _this.results;
                }
                else {
                    return _this.fetchData(false, _this.getFetchArgs("sort", options.sortDatas))
                        .then(function (results) {
                        _this.emitEvent("sort", _this.results, options.sortDatas);
                        return results;
                    });
                }
            }
            catch (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_SORT_ERROR, null, e);
                _this.emit("error", error);
            }
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Renvoie un sous-ensemble des resultats filtrés
     * @param config correspond soit aux critères de filtrage soit à une fonction (appelée à chaque itération) {@link https://lodash.com/docs/#filter}
     * @param cancelFilterHistory false si on souhaite garder un historique des filtres true sinon. false par défaut
     * @example
     * dataSource.on("filter", (filteredResult)=>{
     *       //staff
     *   })
     * dataSource.filter(config, cancelFilterHistory);
     * @void
     */
    DataSource.prototype.filter = function (config, cancelFilterHistory) {
        var _this = this;
        if (cancelFilterHistory === void 0) { cancelFilterHistory = false; }
        this.emit("loadingData", true);
        if (this.isDataSourceArray) {
            if (cancelFilterHistory) {
                if (!this._filtering_flag) {
                    //backup
                    this._results_backup = this.datasourceResults;
                    this._filtering_flag = true;
                }
                else {
                    //restore
                    this.datasourceResults = this._results_backup;
                }
            }
        }
        promise_api_1.Promise.resolve().then(function () {
            try {
                if (_this.isDataSourceArray) {
                    _this.datasourceResults = _.filter(_this.results, config);
                    _this.emitEvent("filter", _this.results);
                }
                else {
                    _this.fetchData(false, _this.getFetchArgs("filter", config)).then(function () {
                        _this.emitEvent("filter", _this.results);
                    });
                }
            }
            catch (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_FILTER_ERROR, null, e);
                _this.emit("error", error);
            }
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Annule tous les filtres et restaure les valeurs d'origine.
     * dataSource.cancelFilter();
     * @void
     */
    DataSource.prototype.cancelFilter = function () {
        if (this._filtering_flag) {
            this.datasourceResults = this._results_backup;
        }
    };
    /***
     * Permet de selectionner un element ou des elements du datasource
     * déclenche un evènement "select".
     * @param args correspond aux éléments sélectionnées
     * @param index dans le cas de la selection d'une ligne
     * @example
     * dataSource.on("select", (selectedItems)=>{
     *       //staff
     *   })
     * dataSource.select(items);
     * @void
     */
    DataSource.prototype.select = function (args) {
        this._selected = args;
        this.emit("select", this.selected);
    };
    /***
     * Supprime toute sélection dans le datasource.
     * @void
     */
    DataSource.prototype.selectClean = function (flag) {
        if (flag) {
            this.select(undefined);
        }
        this._selected = undefined;
    };
    /**
     * reconstitue un objet parametre du fetch
     * @param {string} attrName nom de l'attribut ajouter
     * @param {objet} value valeur de l'attribut ajouter
     * @param {objet=} param
     */
    DataSource.prototype.getFetchArgs = function (attrName, value, param) {
        var fetchArgs = value;
        if (param || this.fetchArgsSaved) {
            if (value) {
                fetchArgs = param || {};
                if (!param) {
                    fetchArgs[this.fetchAttrName] = this.fetchArgsSaved;
                }
                fetchArgs[attrName] = value;
            }
            else {
                fetchArgs = param || this.fetchArgsSaved;
            }
        }
        return fetchArgs;
    };
    return DataSource;
}(events.EventEmitter));
exports.DataSource = DataSource;



/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(258);
var spinner_component_input_1 = __webpack_require__(346);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.abstract-field-datasource");
/**
 * Représente un champ de formulaire qui possède un datasource
 */
var AbstractFieldDatasource = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractFieldDatasource, _super);
    function AbstractFieldDatasource(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Méthode qui controle l'affichage et la suppression du spinner
     * @param flag booléen true pour l'afficher false sinon
     */
    AbstractFieldDatasource.prototype.displaySpinner = function (flag) {
        this.state.inProgress = flag;
        if (!this.props.hideSpinner) {
            this.refs.spinnerLoader && this.refs.spinnerLoader.progress(flag);
            flag ? this.showSpinnerComponent() : this.hideSpinnerComponent();
        }
    };
    /**
     * @inheritDoc
     */
    AbstractFieldDatasource.prototype.componentWillMount = function () {
        _super.prototype.componentWillMount.call(this);
        if (this.props.dataSource) {
            this.setItem();
        }
    };
    /**
     * @inheritDoc
     */
    AbstractFieldDatasource.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.props.dataSource) {
            this.props.dataSource.on("fetch", this.setItem);
            this.props.dataSource.on("init", this.setItem);
            this.props.dataSource.on("add", this.setItem);
            this.props.dataSource.on("delete", this.setItem);
            this.props.dataSource.on("sort", this.setItem);
            this.props.dataSource.on("filter", this.setItem);
            this.props.dataSource.on("loadingData", this.displaySpinner);
        }
    };
    /**
     * @inheritDoc
     */
    AbstractFieldDatasource.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.props.dataSource) {
            this.props.dataSource.removeListener("fetch", this.setItem);
            this.props.dataSource.removeListener("init", this.setItem);
            this.props.dataSource.removeListener("add", this.setItem);
            this.props.dataSource.removeListener("delete", this.setItem);
            this.props.dataSource.removeListener("sort", this.setItem);
            this.props.dataSource.removeListener("filter", this.setItem);
            this.props.dataSource.removeListener("loadingData", this.displaySpinner);
        }
    };
    /**
     * enregistre la liste des choix possibles
     */
    AbstractFieldDatasource.prototype.setItem = function () {
        this.setState({ items: this.props.dataSource.results });
        /* permet de faire appel a la méthode setCurrentValue de dom-adapter pour cocher les valeurs*/
        this.setCurrentValue(this.state.currentValue);
    };
    /**
     * Méthode premettant d'afficher le spinner
     * @returns {Table}
     */
    AbstractFieldDatasource.prototype.showSpinnerComponent = function () {
        this.setState({ spinner: true });
        return this;
    };
    /**
     * Méthode premettant de masquer le spinner
     * @returns {Table}
     */
    AbstractFieldDatasource.prototype.hideSpinnerComponent = function () {
        this.setState({ spinner: false });
        return this;
    };
    AbstractFieldDatasource.prototype.setDataSource = function (value, callback) {
        /** liste des choix disponibles */
        this.setState({ dataSource: value }, callback);
        return this;
    };
    AbstractFieldDatasource.prototype.updateDataSource = function (value) {
        this.setDataSource(value);
    };
    /**
     * Génère le rendu des élements assurant la saisie des valeurs
     * @returns {any}
     */
    AbstractFieldDatasource.prototype.renderField = function () {
        return (React.createElement("div", { className: this.state.fieldClass + " abstractfield-field-content" },
            React.createElement(spinner_component_input_1.SpinnerComponentInput, { ref: "spinnerLoader", isVisible: this.state.spinner }),
            this.state.prefix ? React.createElement("span", { className: "abstractfield-field-prefix" }, this.state.prefix) : null,
            this.renderWidget(),
            this.state.suffix ? React.createElement("span", { className: "abstractfield-field-suffix" }, this.state.suffix) : null,
            this.renderErrors()));
    };
    return AbstractFieldDatasource;
}(abstract_field_1.AbstractField));
exports.AbstractFieldDatasource = AbstractFieldDatasource;



/***/ }),
/* 308 */,
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(3);
var abstract_field_1 = __webpack_require__(258);
var classNames = __webpack_require__(9);
var _ = __webpack_require__(6);
/**
 * Composant représentant les buttons d'action du formulaire
 */
var ButtonsArea = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonsArea, _super);
    function ButtonsArea(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Génère la configuration des boutons par défaut : "Valider" de type "submit" et "Annuler" de type "reset".
     * @returns {*[]}
     */
    ButtonsArea.prototype.getDefaultButtons = function () {
        return [
            {
                type: "submit",
                id: "form_btnValider",
                name: "action:valid",
                value: this.i18n("form").valid,
                className: "hornet-button",
                label: this.i18n("form").valid,
                title: this.i18n("form").validTitle
            },
            {
                type: "reset",
                id: "form_btnCancel",
                name: "action:cancel",
                value: this.i18n("form").cancel,
                className: "hornet-button",
                onClick: null,
                label: this.i18n("form").cancel,
                title: this.i18n("form").cancelTitle
            }
        ];
    };
    /**
     * @inheritDoc
     */
    ButtonsArea.prototype.render = function () {
        var buttons;
        if (!this.state.children) {
            buttons = this.getDefaultButtons();
        }
        var classList = {
            "button-area": true,
            "grid": true,
            "has-gutter": ((this.state.children) && (this.state.children.length > 1)) ? true : false,
            "flex-container": true
        };
        if (this.props.className)
            classList[this.props.className] = true;
        var width = this.props.width + "%";
        return (React.createElement("div", { className: classNames(classList), style: { width: width } }, this.state.children));
    };
    ButtonsArea.defaultProps = _.assign(_.cloneDeep(abstract_field_1.AbstractField.defaultProps), {
        width: 100
    });
    return ButtonsArea;
}(hornet_component_1.HornetComponent));
exports.ButtonsArea = ButtonsArea;



/***/ }),
/* 310 */,
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var notification_1 = __webpack_require__(49);
var abstract_field_1 = __webpack_require__(258);
var abstract_form_1 = __webpack_require__(353);
var upload_file_field_1 = __webpack_require__(342);
var form_utils_1 = __webpack_require__(313);
var dom_adapter_1 = __webpack_require__(312);
var auto_complete_field_1 = __webpack_require__(354);
var notification_manager_1 = __webpack_require__(95);
var checkbox_field_1 = __webpack_require__(359);
var data_validator_1 = __webpack_require__(360);
var classNames = __webpack_require__(9);
var _ = __webpack_require__(6);
var select_field_1 = __webpack_require__(343);
var buttons_area_1 = __webpack_require__(309);
var event_1 = __webpack_require__(325);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.form");
/**
 * Composant permettant de rendre un formulaire Hornet de manière standardisée
 */
var Form = /** @class */ (function (_super) {
    tslib_1.__extends(Form, _super);
    function Form(props, context) {
        var _this = _super.call(this, props, context) || this;
        var calendarLocale = _this.i18n("calendar");
        if (calendarLocale == null) {
            calendarLocale = {};
        }
        /* Messages génériques */
        /* Configuration locale des calendriers et dates */
        _this.state.calendarLocale = calendarLocale;
        _this.state.customNotif = props.notifId != null;
        _this.state.notifId = props.notifId != null ? props.notifId : "Form-" + (Form.idx++);
        _this.listen(event_1.VALUE_CHANGED_EVENT, function (ev) {
            if (ev.detail.form.id == _this.state.id && _this.state.onFormChange) {
                _this.state.onFormChange();
            }
        });
        return _this;
    }
    // Setters (pas de setter sur defaultValues, car cette propriété sert uniquement lors du montage initial du composant
    Form.prototype.setName = function (value, callback) {
        this.setState({ name: value }, callback);
        return this;
    };
    Form.prototype.setOnSubmit = function (handler, callback) {
        this.setState({ onSubmit: handler }, callback);
        return this;
    };
    Form.prototype.setOnFormChange = function (handler, callback) {
        this.setState({ onFormChange: handler }, callback);
        return this;
    };
    Form.prototype.setIsMandatoryFieldsHidden = function (value, callback) {
        this.setState({ isMandatoryFieldsHidden: value }, callback);
        return this;
    };
    Form.prototype.setSubTitle = function (value, callback) {
        this.setState({ subTitle: value }, callback);
        return this;
    };
    Form.prototype.setText = function (value, callback) {
        this.setState({ text: value }, callback);
        return this;
    };
    Form.prototype.setClassName = function (value, callback) {
        this.setState({ className: value }, callback);
        return this;
    };
    Form.prototype.setMarkRequired = function (value, callback) {
        this.setState({ markRequired: value }, callback);
        /* Propagation de la propriété aux champs Hornet appartenant à ce formulaire */
        this.updateMarkRequiredFields(value);
        return this;
    };
    Form.prototype.setImgFilePath = function (value, callback) {
        this.setState({ imgFilePath: value }, callback);
        /* Propagation de la propriété aux champs Hornet appartenant à ce formulaire */
        this.updateImagFilePathFields(value);
        return this;
    };
    Form.prototype.setSchema = function (value, callback) {
        this.setState({ schema: value }, callback);
        return this;
    };
    Form.prototype.setValidationOptions = function (value, callback) {
        this.setState({ validationOptions: value }, callback);
        return this;
    };
    Form.prototype.setFormMessages = function (value, callback) {
        this.setState({ formMessages: value }, callback);
        return this;
    };
    Form.prototype.setCustomValidators = function (value, callback) {
        this.setState({ customValidators: value }, callback);
        return this;
    };
    Form.prototype.setNotifId = function (value, callback) {
        if (value != null) {
            this.setState({ notifId: value, customNotif: true }, callback);
        }
        else {
            this.setState({ notifId: "Form-" + (Form.idx++), customNotif: false }, callback);
        }
        return this;
    };
    Form.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        notification_manager_1.NotificationManager.clean(this.state.notifId, this.state.id);
        if (this.formElement) {
            this.formElement["__component"] = null;
        }
    };
    Form.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        /* On évite la soumission intempestive du formulaire en cas de clics répétés ou de touche entrée maintenue
         sur le bouton de soumission*/
        this.debouncedValidateAndSubmit = _.debounce(this.validateAndSubmit, 500);
        if (this.state.defaultValues) {
            this.updateFields(this.state.defaultValues);
        }
        if (!this.isOneRequired(this.state.children)) {
            this.setMarkRequired(false);
        }
    };
    /**
     * Met à jour la propriété markRequired sur chacun des champs héritant de AbstractField contenus dans le formulaire
     * @param isMarkRequired valeur à assigner à la propriété 'markRequired'
     * @return ce formulaire
     */
    Form.prototype.updateMarkRequiredFields = function (isMarkRequired) {
        var fields = this.extractFields();
        /* Met à jour l'affichage de chaque champ en cas de readOnly*/
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setMarkRequired(isMarkRequired);
            }
            return true;
        });
        return this;
    };
    /**
     * Met à jour la propriété imgFilePath sur chacun des champs héritant de AbstractField contenus dans le formulaire
     * @param imgFilePath valeur à assigner à la propriété 'imgFilePath'
     * @return ce formulaire
     */
    Form.prototype.updateImagFilePathFields = function (imgFilePath) {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setImgFilePath(imgFilePath);
            }
            return true;
        });
        return this;
    };
    /**
     * Met à jour les valeurs courantes des champs du formulaire
     * @param data données du formulaire (clé : nom du champ -> valeur du champ)
     */
    Form.prototype.updateFields = function (data) {
        var fields = this.extractFields();
        this.propagateParentState();
        for (var nameField in fields) {
            var val = _.get(data, nameField);
            if (val != null) {
                if (fields[nameField] instanceof checkbox_field_1.CheckBoxField) {
                    /* Traitement spécifique pour une checkbox : on affecte currentChecked lorsque la valeur est booléenne*/
                    // if (val === true || val === false) {
                    //     fields[name].setCurrentValue("");
                    fields[nameField].setCurrentChecked(val);
                    // } else {
                    //     fields[name].setCurrentValue(val);
                    // }
                }
                else {
                    if (fields[nameField] instanceof select_field_1.SelectField || fields[nameField] instanceof auto_complete_field_1.AutoCompleteField) {
                        if (val instanceof Array) {
                            var choices = [];
                            /** TODO : a deplace dans le composant autocompleteField */
                            if (fields[nameField].state.multiple) {
                                for (var i = 0; i < fields[nameField].state.allChoices.length; i++) {
                                    var choice = fields[nameField].state.allChoices[i];
                                    for (var j = 0; j < val.length; j++) {
                                        if (val[j].toString() == choice["value"]) {
                                            choices.push(choice["value"]);
                                            break;
                                        }
                                    }
                                }
                            }
                            else {
                                for (var i = 0; i < fields[nameField].state.dataSource.length; i++) {
                                    var choice = fields[nameField].state.dataSource[i];
                                    for (var j = 0; j < val.length; j++) {
                                        if (val[j].toString() == choice[fields[nameField].state.valueKey]) {
                                            choices.push(choice[fields[nameField].state.valueKey]);
                                            break;
                                        }
                                    }
                                }
                            }
                            fields[nameField].setCurrentValue(choices);
                        }
                        else {
                            fields[nameField].setCurrentValue(val);
                        }
                    }
                    else {
                        /* Traitement des champs radio et select en mode readOnly */
                        if ((fields[nameField].state.choices) && (this.state.readOnly || fields[nameField].state.readOnly)) {
                            for (var i = 0; i < fields[nameField].state.dataSource.length; i++) {
                                var choice = fields[nameField].state.dataSource[i];
                                if (val.toString() == choice[fields[nameField].state.valueKey]) {
                                    fields[nameField].setCurrentValue(choice[fields[nameField].state.valueKey]);
                                    break;
                                }
                            }
                        }
                        else {
                            fields[nameField].setCurrentValue(val);
                        }
                    }
                }
            }
            else {
                if (fields[nameField] instanceof checkbox_field_1.CheckBoxField) {
                    fields[nameField].setCurrentChecked(false);
                }
                else {
                    fields[nameField].setCurrentValue(null);
                }
            }
        }
    };
    /**
     * Traitement spécifique des notifications concernant les champs d'autocomplétion
     * @param fields champs du formulaire
     * @param notifs notifications d'erreurs de validation
     */
    Form.prototype.processAutocompleteErrors = function (fields, notifs) {
        var processedNotifs = notifs.getNotifications().map(function (notif) {
            /* Parcours de tous les champs */
            Object.keys(fields).every(function (key) {
                var field = fields[key];
                if (field instanceof auto_complete_field_1.AutoCompleteField) {
                    var autoField = field;
                    /* La notification référence le nom global du champ d'auto-complétion
                     ou bien le champ caché contenant la valeur :
                     on modifie cette référence pour pointer vers le champ de saisie libre */
                    // if (notif.field == autoField.getAttribute("name") ||
                    if (notif.field == autoField.state.name ||
                        notif.field == (autoField.getValueFieldName())) {
                        notif.field = autoField.getFreeTypingFieldName();
                        /* Fin de la boucle de parcours des auto-complete */
                        return false;
                    }
                }
                return true;
            }, this);
            return notif;
        }, this);
        notifs.setNotifications(processedNotifs);
    };
    /**
     * Déclenche les notifications correspondant aux éventuelles erreurs de validation
     * @param errors erreurs de validation de formulaire, éventuellement vides
     */
    Form.prototype.notifyErrors = function (errors) {
        if (errors) {
            var fieldsMessages = this.state.formMessages && this.state.formMessages.fields;
            var genericValidationMessages = this.i18n("form.validation");
            var fields_1 = this.extractFields();
            var notificationsError_1 = form_utils_1.FormUtils.getErrors(errors, fields_1, fieldsMessages, genericValidationMessages);
            /* Post-traitement des notifications concernant les champs d'autocomplétion */
            this.processAutocompleteErrors(fields_1, notificationsError_1);
            /* Met à jour les erreurs affichées par chaque composant champ */
            Object.keys(fields_1).every(function (key) {
                var field = fields_1[key];
                if (field instanceof abstract_field_1.AbstractField) {
                    field.setErrors(notificationsError_1.getNotifications());
                }
                return true;
            });
            /* Emission des notifications */
            notification_manager_1.NotificationManager.notify(this.state.notifId, this.state.id, notificationsError_1);
        }
    };
    /**
     * Transforme les valeurs des champs déclarés avec le format "date-time" dans le schéma de validation :
     * effectue la conversion depuis la locale courante, vers le format ISO 8601. Ceci permet une validation isomorphique
     * côté client comme serveur en utilisant le même schéma, et la conversion automatique en objet Date côté backend REST
     * reste possible.
     * @param schema schéma de validation JSON-Schema
     * @param data données de formualaire
     */
    Form.prototype.transformDatesToISO = function (schema, data) {
        if (schema && schema.properties && data) {
            var propNames = Object.keys(schema.properties);
            var property = void 0, propName = void 0;
            for (var i = 0; i < propNames.length; i++) {
                propName = propNames[i];
                property = schema.properties[propName];
                if (property.type == "object") {
                    /* Appel récursif sur les éventuelles propriétés incluses dans le sous-schéma */
                    this.transformDatesToISO(property, data[propName]);
                }
                else if (property.format == "date-time") {
                    if (data[propName]) {
                        var date = hornet_js_utils_1.Utils.dateUtils.parseInTZ(data[propName], this.state.calendarLocale.dateFormat);
                        if (date) {
                            /* La chaîne de caractères est une date valide pour la locale : on convertit en représentation ISO 8601.*/
                            data[propName] = date.toISOString();
                        }
                        /* Sinon la valeur incorrecte est conservée*/
                    }
                }
            }
        }
    };
    /**
     * Déclenche la validation du formulaire, notifie les erreurs éventuelles et exécute la fonction
     * onSubmit présente dans les propriétés s'il n'y a pas d'erreurs
     *
     */
    Form.prototype.validateAndSubmit = function () {
        if (this.formElement) {
            logger.trace("Validation et envoi du formulaire");
            var data = this.extractData();
            if (this.state.onBeforeSubmit) {
                this.state.onBeforeSubmit(data);
            }
            var options = this.state.validationOptions;
            var schema = data_validator_1.DataValidator.transformRequiredStrings(this.state.schema);
            this.transformDatesToISO(this.state.schema, data);
            var validationRes = new data_validator_1.DataValidator(schema, this.state.customValidators, options).validate(data);
            if (!validationRes.valid) {
                this.notifyErrors(validationRes.errors);
            }
            else {
                this.cleanFormErrors();
                if (this.state.onSubmit) {
                    this.state.onSubmit(data);
                }
            }
        }
    };
    /**
     * Supprime les nofifications d'erreurs et les erreurs associées à chaque champ de ce formulaire
     */
    Form.prototype.cleanFormErrors = function () {
        var fields = this.extractFields();
        for (var fieldName in fields) {
            var field = fields[fieldName];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setErrors(null);
            }
        }
        notification_manager_1.NotificationManager.clean(this.state.notifId, this.state.id);
    };
    /**
     * Met à jour les valeurs courantes des champs du formulaire et
     * supprime les nofifications d'erreurs et les erreurs associées à chaque champ de ce formulaire
     * @param data données du formulaire (clé : nom du champ -> valeur du champ)
     */
    Form.prototype.updateFieldsAndClean = function (data) {
        this.updateFields(data);
        this.cleanFormErrors();
    };
    /**
     * Méthode permettant d'alimenter le bloc Notifications d'erreurs puis de déléguer l'évent au composant parent
     * @param e
     *
     */
    Form.prototype._submitHornetForm = function (e) {
        /* e.preventDefault ne doit pas être 'débouncée', sinon la soumission par défaut du formulaire serait effectuée */
        e.preventDefault();
        this.debouncedValidateAndSubmit();
    };
    /** @override */
    Form.prototype.propagateParentState = function () {
        /* Le composant parent se charge de propager les propriétés readOnly et disabled */
        _super.prototype.propagateParentState.call(this);
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setMarkRequired(this.state.markRequired);
                field.setImgFilePath(this.state.imgFilePath);
            }
            return true;
        }, this);
    };
    /** @override */
    Form.prototype.extractFields = function () {
        var fields = {};
        if (this.formElement) {
            for (var index = 0; index < this.formElement.elements.length; index++) {
                var item = this.formElement.elements[index];
                if (item["name"]) {
                    if (item["__component"]) {
                        fields[item["name"]] = item["__component"];
                    }
                    else {
                        if (fields[item["name"]]) {
                            fields[item["name"]].addHtmlElement(item);
                        }
                        else {
                            fields[item["name"]] = new dom_adapter_1.DomAdapter();
                            fields[item["name"]].registerHtmlElement(item);
                        }
                    }
                }
            }
        }
        return fields;
    };
    /**
     * Méthode permettant de déterminer si le formulaire dispose d'un champ de type UploadFileField
     * Dans ce cas, on ajoute la propriété ["encType"] = "multipart/form-data" au formulaire
     * @param items
     * @returns {boolean}
     */
    Form.prototype.isMultiPartForm = function (items) {
        var _this = this;
        var isMultiPart = false;
        React.Children.map(items, function (child) {
            if (!isMultiPart) {
                if (child != null) {
                    if (child["props"] && child["props"].children) {
                        isMultiPart = _this.isMultiPartForm(child["props"].children);
                    }
                    if (!isMultiPart && child.type === upload_file_field_1.UploadFileField) {
                        isMultiPart = true;
                    }
                }
            }
        });
        return isMultiPart;
    };
    /**
     * Méthode permettant de déterminer s'il y a au moins un champ requis.
     * @param items
     * @returns {boolean}
     */
    Form.prototype.isOneRequired = function (items) {
        var _this = this;
        var isOneRequired = false;
        React.Children.map(items, function (child) {
            if (!isOneRequired) {
                if (child != null) {
                    if (child["props"] && child["props"].children) {
                        isOneRequired = _this.isOneRequired(child["props"].children);
                    }
                    if (!isOneRequired && child.props && child.props.required == true) {
                        isOneRequired = true;
                    }
                }
            }
        });
        return isOneRequired;
    };
    /**
     * @inheritDoc
     */
    Form.prototype.render = function () {
        var classes = {
            "form": true,
            "clear": true,
            /* Application du style CSS readonly à tout le bloc lorsque tous les champs sont en lecture seule */
            "readonly": this.state.readOnly
        };
        logger.trace("render(), HornetForm ");
        var customNotif = null;
        if (!this.state.customNotif) {
            customNotif = (React.createElement(notification_1.Notification, { id: this.state.notifId }));
        }
        /* La validation de formulaire HTML 5 est désactivée (noValidate="true") :
         on s'appuie uniquement sur la validation à la soumission et on a ainsi un rendu cohérent entre navigateurs. */
        var formProps = {
            id: this.state.id,
            name: this.state.name,
            className: this.state.className,
            method: "post",
            onSubmit: this._submitHornetForm,
            noValidate: true,
            onChange: this.state.onFormChange ? this.state.onFormChange : undefined,
            ref: this.registerForm
        };
        if (this.isMultiPartForm(this.state.children)) {
            formProps["encType"] = "multipart/form-data";
        }
        var textHtmlProps = {
            lang: this.props.textLang ? this.props.textLang : null
        };
        return (React.createElement("section", { className: "form-container" },
            customNotif,
            React.createElement("div", { className: classNames(classes) },
                React.createElement("form", tslib_1.__assign({}, formProps),
                    (this.state.subTitle || this.state.text
                        || (this.state.markRequired && !this.state.isMandatoryFieldsHidden)) ?
                        React.createElement("div", { className: "form-titles" },
                            this.state.subTitle ? React.createElement("h3", { className: "form-soustitre" }, this.state.subTitle) : null,
                            this.state.text ?
                                React.createElement("p", tslib_1.__assign({ className: "form-texte" }, textHtmlProps), this.state.text) : null,
                            this.state.markRequired && !this.state.isMandatoryFieldsHidden ?
                                React.createElement("p", { className: "discret" }, this.i18n("form.fillField")) : null)
                        : null,
                    (this.state.children) ?
                        React.createElement("div", { className: "form-content" },
                            React.createElement("div", null, this.state.children))
                        : null))));
    };
    /**
     * retourne un tableau de bouton pour la validation du formulaire
     * @param children
     * @returns {Array<any>}
     */
    Form.prototype.getButtonsArea = function (children) {
        var tableauButtonsArea = [];
        React.Children.map(children, function (child) {
            if (child.type === buttons_area_1.ButtonsArea) {
                tableauButtonsArea.push(child);
            }
        });
        return tableauButtonsArea;
    };
    Form.idx = 0;
    /** Valeur de propriétés par défaut */
    Form.defaultProps = _.assign(_.cloneDeep(abstract_form_1.AbstractForm.defaultProps), {
        markRequired: true,
        isMandatoryFieldsHidden: false,
        subTitle: null,
        className: "formRecherche",
        customValidators: [],
        validationOptions: data_validator_1.DataValidator.DEFAULT_VALIDATION_OPTIONS
    });
    return Form;
}(abstract_form_1.AbstractForm));
exports.Form = Form;



/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var hornet_component_1 = __webpack_require__(3);
var form_utils_1 = __webpack_require__(313);
var hornet_js_utils_1 = __webpack_require__(0);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.dom-adapter");
/**
 * Adaptateur DOM pour un champ de formulaire
 */
var DomAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(DomAdapter, _super);
    function DomAdapter(props, context) {
        return _super.call(this, props, context) || this;
    }
    DomAdapter.prototype.getElementType = function (elt) {
        var tag = this.htmlElement.tagName.toLowerCase();
        var type = null;
        if (tag == "input") {
            type = this.htmlElement["type"];
        }
        else if (tag == "textarea") {
            type = "textarea";
        }
        else if (tag == "select") {
            type = "select";
        }
        return type;
    };
    DomAdapter.prototype.getHornetForm = function () {
        if (this.htmlElement) {
            return this.htmlElement.form.__component;
        }
        else {
            return this.multipleElement[0].form.__component;
        }
    };
    DomAdapter.prototype.registerHtmlElement = function (elt) {
        if (elt == null) {
            if (this.htmlElement) {
                this.htmlElement["__component"] = null;
            }
            this.name = null;
            this.type = null;
            this.htmlElement = null;
        }
        else {
            if (this.htmlElement) {
                this.addHtmlElement(elt);
            }
            else {
                this.htmlElement = elt;
                this.name = this.htmlElement.name;
                this.type = this.getElementType(elt);
                this.htmlElement["__component"] = this;
            }
        }
    };
    DomAdapter.prototype.addHtmlElement = function (elt) {
        if (this.htmlElement) {
            var type = this.getElementType(elt);
            if (this.type == type && type == "radio") {
                this.multipleElement = [];
                this.multipleElement.push(this.htmlElement);
                elt["__component"] = this;
                this.multipleElement.push(elt);
                this.htmlElement = null;
            }
            else {
                logger.error("DomAdapter.addHtmlElement > different or unallowed types : " + this.type + " and " + type);
            }
        }
        else {
            elt["__component"] = this;
            this.multipleElement.push(elt);
        }
    };
    /**
     * Renvoie la valeur de la propriété HTML indiquée
     * @param name nom de la propriété
     * @returns {string} la valeur ou null si la propriété n'est pas définie
     */
    DomAdapter.prototype.getAttribute = function (name) {
        if (this.htmlElement) {
            return this.htmlElement.getAttribute(name);
        }
    };
    /**
     * Initialise la propriété HTML avec la valeur indiquée
     * @param name nom de la propriété
     * @param value valeur
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setAttribute = function (name, value) {
        if (this.htmlElement) {
            this.htmlElement.setAttribute(name, value);
        }
        else if (this.multipleElement) {
            for (var i = 0; i < this.multipleElement.length; i++) {
                this.multipleElement[i].setAttribute(name, value);
            }
        }
        return this;
    };
    /**
     * Pour une case à cocher, initialise la propriété checked
     * @param value booléen
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setCurrentChecked = function (value) {
        if (this.htmlElement && this.type == "checkbox") {
            this.htmlElement.checked = value;
        }
        return this;
    };
    /**
     * Initialise la valeur courante du champ de formulaire
     * @param value valeur à utiliser
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setCurrentValue = function (value) {
        var _this = this;
        var strValue = (value != null && value.toString) ? value.toString() : "";
        var type = this.type;
        if (type) {
            type = type.toLowerCase();
        }
        if (this.htmlElement) {
            if (type == "text" || type == "textarea" || type == "hidden" || type == "checkbox"
                || (type == "select" && this.htmlElement.multiple === false)) {
                this.htmlElement.value = (this.htmlElement.dataset && this.htmlElement.dataset.multiple === "true") ? (value ? JSON.stringify(value) : "") : strValue;
            }
            else if (type == "select" /*select multiple*/) {
                if (value instanceof Array) {
                    this.htmlElement.value = null;
                    value.forEach(function (val) {
                        for (var i = 0; i < _this.htmlElement.options.length; i++) {
                            if (_this.htmlElement.options[i].value == val) {
                                _this.htmlElement.options[i].selected = true;
                                return;
                            }
                        }
                    });
                }
                else {
                    this.htmlElement.value = value;
                }
            }
        }
        else if (this.multipleElement) {
            for (var i = 0; i < this.multipleElement.length; i++) {
                if (this.multipleElement[i].value == strValue) {
                    this.multipleElement[i].checked = true;
                }
                else {
                    this.multipleElement[i].checked = false;
                }
            }
        }
        return this;
    };
    /**
     * Renvoie la valeur courante du champ de formulaire
     * @returns {null}
     */
    DomAdapter.prototype.getCurrentValue = function () {
        var val = null;
        if (this.htmlElement) {
            var type = this.type;
            if (type) {
                type = type.toLowerCase();
            }
            if (type == "text" || type == "textarea" || type == "hidden"
                || (type == "select" && this.htmlElement.multiple === false)) {
                try {
                    if (Array.isArray(JSON.parse(this.htmlElement.value))) {
                        val = JSON.parse(this.htmlElement.value);
                    }
                    else {
                        val = this.htmlElement.value;
                    }
                }
                catch (e) {
                    val = this.htmlElement.value;
                }
            }
            else if (type == "select" /*select multiple*/) {
                val = [];
                /* Note : l'attribut selectedOptions n'est pas supporté par Internet Explorer */
                for (var i = 0; i < this.htmlElement.options.length; i++) {
                    var option = this.htmlElement.options[i];
                    if (option.selected) {
                        val.push(option.value);
                    }
                }
            }
            else if (type == "checkbox") {
                // if(!_.isEmpty(this.htmlElement.value) && this.htmlElement.value != "on") {
                //     /* Cas où une valeur est explicitement spécifiée */
                //     if (this.htmlElement.checked) {
                //         val = this.htmlElement.value;
                //     } else {
                //         val = "";
                //     }
                // } else {
                /* Pas de valeur spécifique : la valeur est un booléen égal à checked */
                val = this.htmlElement.checked;
                // }
            }
            else if (type == "file") {
                var fileList = this.htmlElement.files;
                if (fileList && fileList.length >= 1) {
                    /* Pour simplifier la validation et la transmission via super-agent,
                     un seul fichier par champ de type "file" est pris en compte */
                    val = fileList[0];
                }
                else {
                    /* Aucun fichier n'a été sélectionné : on récupère les informations de celui qui avait
                     éventuellement déjà été transmis */
                    // TODO à réactiver : voir pourquoi le composant UploadFileField ne peut être utilisé
                    val = form_utils_1.FormUtils.extractFileData(this.htmlElement);
                }
            }
        }
        else if (this.multipleElement) {
            for (var i = 0; i < this.multipleElement.length; i++) {
                if (this.multipleElement[i].checked) {
                    val = this.multipleElement[i].value;
                    break;
                }
            }
        }
        return val;
    };
    /**
     * Bascule le champ en readOnly
     * @param value valeur à utiliser
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setReadOnly = function (value) {
        if (this.htmlElement) {
            this.htmlElement.readOnly = value;
            if (value) {
                this.htmlElement.classList.add("readonly");
            }
            else {
                this.htmlElement.classList.remove("readonly");
            }
        }
        return this;
    };
    /**
     * Bascule le champ en readOnly
     * @param value valeur à utiliser
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setDisabled = function (value) {
        if (this.htmlElement) {
            this.htmlElement.disabled = value;
        }
        return this;
    };
    return DomAdapter;
}(hornet_component_1.HornetComponent));
exports.DomAdapter = DomAdapter;



/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var notification_manager_1 = __webpack_require__(95);
var _ = __webpack_require__(6);
var IntlMessageFormat = __webpack_require__(105);
var FormUtils = /** @class */ (function () {
    function FormUtils() {
    }
    /**
     * Extrait le nom du champ depuis l'erreur de validation indiquée
     * Le nom du champ peut être un "path" tel que "ville.pays.id".
     * @param error une erreur de validation ajv
     * @return le nom du champ, ou une chaîne vide si non renseigné
     */
    FormUtils.extractFieldName = function (error) {
        var fieldName = "";
        if (error) {
            if (error.dataPath && error.dataPath.length > 1) {
                var offset = 0;
                if (error.dataPath.charAt(0) == ".") {
                    offset = 1;
                }
                fieldName = error.dataPath.substring(offset);
            }
            if (error.keyword == "required") {
                if (error.params && error.params.missingProperty) {
                    if (fieldName) {
                        fieldName += ".";
                    }
                    fieldName += error.params.missingProperty;
                }
            }
        }
        return fieldName;
    };
    /**
     * Génère le message d'erreur correspondant au mot-clé et au champ indiqués
     * @param keyword mot clé de validation json-schema
     * @param fieldName nom du champ (peut être un "path" tel que "ville.pays.id")
     * @param fieldsMessages messages spécifiques aux champs du formulaire
     * @param genericValidationMessages messages d'erreur génériques
     * @param complement
     * @return le message ou undefined lorsqu'aucun n'est défini pour le mot-clé indiqué
     */
    FormUtils.extractMessage = function (keyword, fieldName, fieldsMessages, genericValidationMessages, complement) {
        var message;
        var specificMessage = _.get(fieldsMessages, fieldName + "." + keyword);
        if (_.isString(specificMessage)) {
            message = specificMessage;
            if (complement) {
                complement["field"] = fieldName;
                var intlMsg = new IntlMessageFormat(specificMessage);
                message = intlMsg.format(complement);
            }
        }
        else if (genericValidationMessages) {
            var genericMessage = genericValidationMessages[keyword] || genericValidationMessages["generic"];
            if (_.isString(genericMessage)) {
                var intlMsg = new IntlMessageFormat(genericMessage);
                message = intlMsg.format({ field: fieldName });
            }
        }
        return message;
    };
    /**
     * Traite les erreurs de validation de formulaire : renvoie des notifications d'erreur.
     * @param errors liste d'erreurs éventuellement vide
     * @param fields Liste des champs du formulaire
     * @param fieldsMessages messages spécifiques aux champs du formulaire
     * @param genericValidationMessages messages d'erreur génériques
     * @return {Notifications} les notifications correspondant aux erreurs de validation
     */
    FormUtils.getErrors = function (errors, fields, fieldsMessages, genericValidationMessages) {
        var notificationsError = new notification_manager_1.Notifications();
        for (var index = 0; index < errors.length; index++) {
            var error = errors[index];
            var erreurNotification = new notification_manager_1.NotificationType();
            erreurNotification.id = "ACTION_ERREUR_" + index;
            erreurNotification.text = error.message;
            var fieldName = FormUtils.extractFieldName(error);
            if (fieldName) {
                erreurNotification.anchor = fieldName + "_anchor";
                erreurNotification.field = fieldName;
                erreurNotification.additionalInfos = error.params;
                var complement = {};
                // Gestion des champs editables d'un tableau
                if (fields[fieldName] && fields[fieldName].props && fields[fieldName].props.title) {
                    var data = fieldName.split(".");
                    if (!isNaN(data[data.length - 2])) {
                        fieldName = data[data.length - 1];
                        complement = { complement: (parseInt(data[data.length - 2]) + 1).toString() };
                    }
                }
                var message = FormUtils.extractMessage(error.keyword, fieldName, fieldsMessages, genericValidationMessages, complement);
                if (message) {
                    /* Surcharge du message produit par ajv */
                    erreurNotification.text = message;
                }
            }
            notificationsError.addNotification(erreurNotification);
        }
        return notificationsError;
    };
    /**
     * Récupère les informations du fichier éventuellement déjà sélectionné associé à un champ de type "file"
     * @param inputItem champ de formulaire de type envoi de fichier
     * @returns {UploadedFile} une instance de UploadedFile ou undefined
     */
    FormUtils.extractFileData = function (inputItem) {
        var selectedFile;
        if (inputItem.dataset && inputItem.dataset["fileId"]) {
            selectedFile = {
                id: parseInt(inputItem.dataset["fileId"]),
                originalname: inputItem.dataset["fileOriginalname"],
                name: inputItem.dataset["fileName"],
                mimeType: inputItem.dataset["fileMimeType"],
                encoding: inputItem.dataset["fileEncoding"],
                size: parseInt(inputItem.dataset["fileSize"]),
                buffer: null
            };
        }
        return selectedFile;
    };
    return FormUtils;
}());
exports.FormUtils = FormUtils;



/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var events = __webpack_require__(27);
var AutoCompleteState = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteState, _super);
    function AutoCompleteState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * mets à jour l'élément focus
     * @param choiceFocused
     * @param {string} value
     */
    AutoCompleteState.prototype.setFocusOn = function (choiceFocused, value, index) {
        var _this = this;
        setTimeout(function () {
            _this.emit(AutoCompleteState.FOCUS_CHANGE_EVENT, _this.choiceFocused, choiceFocused, value, index);
        });
        this.choiceFocused = choiceFocused;
    };
    AutoCompleteState.FOCUS_CHANGE_EVENT = "onFocusChange";
    return AutoCompleteState;
}(events.EventEmitter));
exports.AutoCompleteState = AutoCompleteState;



/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * hornet-js-utils - Partie commune et utilitaire à tous les composants hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
/**
 * Classe utilitaire sur les objets.
 */
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    /**
     * recupère un sous objet d'un objet (deep attribute)
     * @example
     * let object1 = { id : 1, desc : { type : {id : 2, label : 'label'}}
     * ObjectUtils.getSubObject(object1, "desc.type") => {id : 2, label : 'label'}
     * @param {Object} obj objet à parser
     * @param {string} chainage d'attribut attr1.attr2....attrn
     * @return la valeur de l'attribut attrn de l'objet.
     *
     */
    ObjectUtils.getSubObject = function (obj, deepAttr) {
        var res;
        if (obj && deepAttr) {
            var stringKeys = deepAttr.split(".");
            var value = obj;
            for (var attr in stringKeys) {
                var key = stringKeys[attr];
                if (key) {
                    value = value[key];
                    if (!value) {
                        break;
                    }
                }
            }
            res = value;
        }
        return res;
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;



/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @classdesc Classe de configuration pour les datasources de type service
 * @class
 */
var DataSourceConfigPage = /** @class */ (function () {
    function DataSourceConfigPage(page, method, fetchAttrName) {
        this.page = page;
        this.method = method;
        this.fetchAttrName = fetchAttrName;
    }
    return DataSourceConfigPage;
}());
exports.DataSourceConfigPage = DataSourceConfigPage;



/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(261);

module.exports = SchemaObject;

function SchemaObject(obj) {
  util.copy(obj, this);
}


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_validate(it, $keyword, $ruleType) {
  var out = '';
  var $async = it.schema.$async === true,
    $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
    $id = it.self._getId(it.schema);
  if (it.isTop) {
    out += ' var validate = ';
    if ($async) {
      it.async = true;
      out += 'async ';
    }
    out += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
    if ($id && (it.opts.sourceCode || it.opts.processCode)) {
      out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
    }
  }
  if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
    var $keyword = 'false schema';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    if (it.schema === false) {
      if (it.isTop) {
        $breakOnError = true;
      } else {
        out += ' var ' + ($valid) + ' = false; ';
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'boolean schema is false\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
    } else {
      if (it.isTop) {
        if ($async) {
          out += ' return data; ';
        } else {
          out += ' validate.errors = null; return true; ';
        }
      } else {
        out += ' var ' + ($valid) + ' = true; ';
      }
    }
    if (it.isTop) {
      out += ' }; return validate; ';
    }
    return out;
  }
  if (it.isTop) {
    var $top = it.isTop,
      $lvl = it.level = 0,
      $dataLvl = it.dataLevel = 0,
      $data = 'data';
    it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
    it.baseId = it.baseId || it.rootId;
    delete it.isTop;
    it.dataPathArr = [undefined];
    out += ' var vErrors = null; ';
    out += ' var errors = 0;     ';
    out += ' if (rootData === undefined) rootData = data; ';
  } else {
    var $lvl = it.level,
      $dataLvl = it.dataLevel,
      $data = 'data' + ($dataLvl || '');
    if ($id) it.baseId = it.resolve.url(it.baseId, $id);
    if ($async && !it.async) throw new Error('async schema in sync schema');
    out += ' var errs_' + ($lvl) + ' = errors;';
  }
  var $valid = 'valid' + $lvl,
    $breakOnError = !it.opts.allErrors,
    $closingBraces1 = '',
    $closingBraces2 = '';
  var $errorKeyword;
  var $typeSchema = it.schema.type,
    $typeIsArray = Array.isArray($typeSchema);
  if ($typeIsArray && $typeSchema.length == 1) {
    $typeSchema = $typeSchema[0];
    $typeIsArray = false;
  }
  if (it.schema.$ref && $refKeywords) {
    if (it.opts.extendRefs == 'fail') {
      throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
    } else if (it.opts.extendRefs !== true) {
      $refKeywords = false;
      it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
    }
  }
  if (it.schema.$comment && it.opts.$comment) {
    out += ' ' + (it.RULES.all.$comment.code(it, '$comment'));
  }
  if ($typeSchema) {
    if (it.opts.coerceTypes) {
      var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
    }
    var $rulesGroup = it.RULES.types[$typeSchema];
    if ($coerceToTypes || $typeIsArray || $rulesGroup === true || ($rulesGroup && !$shouldUseGroup($rulesGroup))) {
      var $schemaPath = it.schemaPath + '.type',
        $errSchemaPath = it.errSchemaPath + '/type';
      var $schemaPath = it.schemaPath + '.type',
        $errSchemaPath = it.errSchemaPath + '/type',
        $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
      out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') { ';
      if ($coerceToTypes) {
        var $dataType = 'dataType' + $lvl,
          $coerced = 'coerced' + $lvl;
        out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; ';
        if (it.opts.coerceTypes == 'array') {
          out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ')) ' + ($dataType) + ' = \'array\'; ';
        }
        out += ' var ' + ($coerced) + ' = undefined; ';
        var $bracesCoercion = '';
        var arr1 = $coerceToTypes;
        if (arr1) {
          var $type, $i = -1,
            l1 = arr1.length - 1;
          while ($i < l1) {
            $type = arr1[$i += 1];
            if ($i) {
              out += ' if (' + ($coerced) + ' === undefined) { ';
              $bracesCoercion += '}';
            }
            if (it.opts.coerceTypes == 'array' && $type != 'array') {
              out += ' if (' + ($dataType) + ' == \'array\' && ' + ($data) + '.length == 1) { ' + ($coerced) + ' = ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + ';  } ';
            }
            if ($type == 'string') {
              out += ' if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
            } else if ($type == 'number' || $type == 'integer') {
              out += ' if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
              if ($type == 'integer') {
                out += ' && !(' + ($data) + ' % 1)';
              }
              out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
            } else if ($type == 'boolean') {
              out += ' if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
            } else if ($type == 'null') {
              out += ' if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
            } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
              out += ' if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
            }
          }
        }
        out += ' ' + ($bracesCoercion) + ' if (' + ($coerced) + ' === undefined) {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
          if ($typeIsArray) {
            out += '' + ($typeSchema.join(","));
          } else {
            out += '' + ($typeSchema);
          }
          out += '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should be ';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else {  ';
        var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
          $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
        out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
        if (!$dataLvl) {
          out += 'if (' + ($parentData) + ' !== undefined)';
        }
        out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } ';
      } else {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
          if ($typeIsArray) {
            out += '' + ($typeSchema.join(","));
          } else {
            out += '' + ($typeSchema);
          }
          out += '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should be ';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      }
      out += ' } ';
    }
  }
  if (it.schema.$ref && !$refKeywords) {
    out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
    if ($breakOnError) {
      out += ' } if (errors === ';
      if ($top) {
        out += '0';
      } else {
        out += 'errs_' + ($lvl);
      }
      out += ') { ';
      $closingBraces2 += '}';
    }
  } else {
    var arr2 = it.RULES;
    if (arr2) {
      var $rulesGroup, i2 = -1,
        l2 = arr2.length - 1;
      while (i2 < l2) {
        $rulesGroup = arr2[i2 += 1];
        if ($shouldUseGroup($rulesGroup)) {
          if ($rulesGroup.type) {
            out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data)) + ') { ';
          }
          if (it.opts.useDefaults && !it.compositeRule) {
            if ($rulesGroup.type == 'object' && it.schema.properties) {
              var $schema = it.schema.properties,
                $schemaKeys = Object.keys($schema);
              var arr3 = $schemaKeys;
              if (arr3) {
                var $propertyKey, i3 = -1,
                  l3 = arr3.length - 1;
                while (i3 < l3) {
                  $propertyKey = arr3[i3 += 1];
                  var $sch = $schema[$propertyKey];
                  if ($sch.default !== undefined) {
                    var $passData = $data + it.util.getProperty($propertyKey);
                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + (it.useDefault($sch.default)) + ' ';
                    } else {
                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
                    }
                    out += '; ';
                  }
                }
              }
            } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
              var arr4 = it.schema.items;
              if (arr4) {
                var $sch, $i = -1,
                  l4 = arr4.length - 1;
                while ($i < l4) {
                  $sch = arr4[$i += 1];
                  if ($sch.default !== undefined) {
                    var $passData = $data + '[' + $i + ']';
                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + (it.useDefault($sch.default)) + ' ';
                    } else {
                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
                    }
                    out += '; ';
                  }
                }
              }
            }
          }
          var arr5 = $rulesGroup.rules;
          if (arr5) {
            var $rule, i5 = -1,
              l5 = arr5.length - 1;
            while (i5 < l5) {
              $rule = arr5[i5 += 1];
              if ($shouldUseRule($rule)) {
                var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
                if ($code) {
                  out += ' ' + ($code) + ' ';
                  if ($breakOnError) {
                    $closingBraces1 += '}';
                  }
                }
              }
            }
          }
          if ($breakOnError) {
            out += ' ' + ($closingBraces1) + ' ';
            $closingBraces1 = '';
          }
          if ($rulesGroup.type) {
            out += ' } ';
            if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
              out += ' else { ';
              var $schemaPath = it.schemaPath + '.type',
                $errSchemaPath = it.errSchemaPath + '/type';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
                if ($typeIsArray) {
                  out += '' + ($typeSchema.join(","));
                } else {
                  out += '' + ($typeSchema);
                }
                out += '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should be ';
                  if ($typeIsArray) {
                    out += '' + ($typeSchema.join(","));
                  } else {
                    out += '' + ($typeSchema);
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              out += ' } ';
            }
          }
          if ($breakOnError) {
            out += ' if (errors === ';
            if ($top) {
              out += '0';
            } else {
              out += 'errs_' + ($lvl);
            }
            out += ') { ';
            $closingBraces2 += '}';
          }
        }
      }
    }
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces2) + ' ';
  }
  if ($top) {
    if ($async) {
      out += ' if (errors === 0) return data;           ';
      out += ' else throw new ValidationError(vErrors); ';
    } else {
      out += ' validate.errors = vErrors; ';
      out += ' return errors === 0;       ';
    }
    out += ' }; return validate;';
  } else {
    out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
  }
  out = it.util.cleanUpCode(out);
  if ($top) {
    out = it.util.finalCleanUpCode(out, $async);
  }

  function $shouldUseGroup($rulesGroup) {
    var rules = $rulesGroup.rules;
    for (var i = 0; i < rules.length; i++)
      if ($shouldUseRule(rules[i])) return true;
  }

  function $shouldUseRule($rule) {
    return it.schema[$rule.keyword] !== undefined || ($rule.implements && $ruleImplementsSomeKeyword($rule));
  }

  function $ruleImplementsSomeKeyword($rule) {
    var impl = $rule.implements;
    for (var i = 0; i < impl.length; i++)
      if (it.schema[impl[i]] !== undefined) return true;
  }
  return out;
}


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limit(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $isMax = $keyword == 'maximum',
    $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
    $schemaExcl = it.schema[$exclusiveKeyword],
    $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
    $op = $isMax ? '<' : '>',
    $notOp = $isMax ? '>' : '<',
    $errorKeyword = undefined;
  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
      $exclusive = 'exclusive' + $lvl,
      $exclType = 'exclType' + $lvl,
      $exclIsNumber = 'exclIsNumber' + $lvl,
      $opExpr = 'op' + $lvl,
      $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' var ' + ($exclusive) + '; var ' + ($exclType) + ' = typeof ' + ($schemaValueExcl) + '; if (' + ($exclType) + ' != \'boolean\' && ' + ($exclType) + ' != \'undefined\' && ' + ($exclType) + ' != \'number\') { ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' ' + ($exclType) + ' == \'number\' ? ( (' + ($exclusive) + ' = ' + ($schemaValue) + ' === undefined || ' + ($schemaValueExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ') ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValueExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) : ( (' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
  } else {
    var $exclIsNumber = typeof $schemaExcl == 'number',
      $opStr = $op;
    if ($exclIsNumber && $isData) {
      var $opExpr = '\'' + $opStr + '\'';
      out += ' if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' ( ' + ($schemaValue) + ' === undefined || ' + ($schemaExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ' ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { ';
    } else {
      if ($exclIsNumber && $schema === undefined) {
        $exclusive = true;
        $errorKeyword = $exclusiveKeyword;
        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
        $schemaValue = $schemaExcl;
        $notOp += '=';
      } else {
        if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);
        if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
          $exclusive = true;
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
          $notOp += '=';
        } else {
          $exclusive = false;
          $opStr += '=';
        }
      }
      var $opExpr = '\'' + $opStr + '\'';
      out += ' if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') { ';
    }
  }
  $errorKeyword = $errorKeyword || $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + ($opStr) + ' ';
      if ($isData) {
        out += '\' + ' + ($schemaValue);
      } else {
        out += '' + ($schemaValue) + '\'';
      }
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitItems(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxItems' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';
      if ($keyword == 'maxItems') {
        out += 'more';
      } else {
        out += 'less';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' items\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitLength(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxLength' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  if (it.opts.unicode === false) {
    out += ' ' + ($data) + '.length ';
  } else {
    out += ' ucs2length(' + ($data) + ') ';
  }
  out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT be ';
      if ($keyword == 'maxLength') {
        out += 'longer';
      } else {
        out += 'shorter';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' characters\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitProperties(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxProperties' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';
      if ($keyword == 'maxProperties') {
        out += 'more';
      } else {
        out += 'less';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' properties\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var DATE_TIME_SEPARATOR = /t|\s/i;

var COMPARE_FORMATS = {
  date: compareDate,
  time: compareTime,
  'date-time': compareDateTime
};

module.exports = function (minMax) {
  var keyword = 'format' + minMax;
  return function defFunc(ajv) {
    defFunc.definition = {
      type: 'string',
      inline: __webpack_require__(406),
      statements: true,
      errors: 'full',
      metaSchema: {
        anyOf: [
          { type: 'string' },
          {
            type: 'object',
            required: [ '$data' ],
            properties: {
              $data: {
                type: 'string',
                anyOf: [
                  { format: 'relative-json-pointer' },
                  { format: 'json-pointer' }
                ]
              }
            },
            additionalProperties: false
          }
        ]
      }
    };

    ajv.addKeyword(keyword, defFunc.definition);
    ajv.addKeyword('formatExclusive' + minMax);
    extendFormats(ajv);
    return ajv;
  };
};


function extendFormats(ajv) {
  var formats = ajv._formats;
  for (var name in COMPARE_FORMATS) {
    var format = formats[name];
    // the last condition is needed if it's RegExp from another window
    if (typeof format != 'object' || format instanceof RegExp || !format.validate)
      format = formats[name] = { validate: format };
    if (!format.compare)
      format.compare = COMPARE_FORMATS[name];
  }
}


function compareDate(d1, d2) {
  if (!(d1 && d2)) return;
  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
  if (d1 === d2) return 0;
}


function compareTime(t1, t2) {
  if (!(t1 && t2)) return;
  t1 = t1.match(TIME);
  t2 = t2.match(TIME);
  if (!(t1 && t2)) return;
  t1 = t1[1] + t1[2] + t1[3] + (t1[4]||'');
  t2 = t2[1] + t2[2] + t2[3] + (t2[4]||'');
  if (t1 > t2) return 1;
  if (t1 < t2) return -1;
  if (t1 === t2) return 0;
}


function compareDateTime(dt1, dt2) {
  if (!(dt1 && dt2)) return;
  dt1 = dt1.split(DATE_TIME_SEPARATOR);
  dt2 = dt2.split(DATE_TIME_SEPARATOR);
  var res = compareDate(dt1[0], dt2[0]);
  if (res === undefined) return;
  return res || compareTime(dt1[1], dt2[1]);
}


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hornet_event_1 = __webpack_require__(7);
exports.VALUE_CHANGED_EVENT = new hornet_event_1.HornetEvent("VALUE_CHANGED_EVENT");



/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(418);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(266) && !__webpack_require__(273)(function () {
  return Object.defineProperty(__webpack_require__(328)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(265);
var document = __webpack_require__(259).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(260);
var toIObject = __webpack_require__(267);
var arrayIndexOf = __webpack_require__(420)(false);
var IE_PROTO = __webpack_require__(295)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(331);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 331 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(293);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(428);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(440);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(299);
var $export = __webpack_require__(271);
var redefine = __webpack_require__(335);
var hide = __webpack_require__(263);
var has = __webpack_require__(260);
var Iterators = __webpack_require__(300);
var $iterCreate = __webpack_require__(432);
var setToStringTag = __webpack_require__(302);
var getPrototypeOf = __webpack_require__(435);
var ITERATOR = __webpack_require__(269)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(263);


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(329);
var hiddenKeys = __webpack_require__(297).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(280);
var createDesc = __webpack_require__(277);
var toIObject = __webpack_require__(267);
var toPrimitive = __webpack_require__(292);
var has = __webpack_require__(260);
var IE8_DOM_DEFINE = __webpack_require__(327);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(266) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = {
  DATE_ROW_COUNT: 6,
  DATE_COL_COUNT: 7
};
module.exports = exports['default'];

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = mapSelf;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function mirror(o) {
  return o;
}

function mapSelf(children) {
  // return ReactFragment
  return _react2['default'].Children.map(children, mirror);
}
module.exports = exports['default'];

/***/ }),
/* 340 */,
/* 341 */,
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var _ = __webpack_require__(6);
var abstract_field_1 = __webpack_require__(258);
var key_codes_1 = __webpack_require__(10);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.upload-file-field");
/**
 * Composant champ de formulaire de type envoi de fichier
 */
var UploadFileField = /** @class */ (function (_super) {
    tslib_1.__extends(UploadFileField, _super);
    function UploadFileField(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.readOnlyFile = _this.state.defaultFile;
        if (!_this.state.buttonLabel) {
            _this.state.buttonLabel = _this.state.name;
        }
        _this.state.activeButtonLabel = _this.state.buttonLabel;
        return _this;
    }
    UploadFileField.prototype.setReadOnlyFile = function (readOnlyFile, callback) {
        this.setState({ readOnlyFile: readOnlyFile }, callback);
        return this;
    };
    /**
     * Gestion du changement de fichier sélectionné
     * @param e évènement
     */
    UploadFileField.prototype.handleChange = function (e) {
        var input = e.target;
        if (input.files && input.files.length > 0) {
            this.setState({ activeButtonLabel: this.i18n(this.state.i18nLabelKey, { "count": input.files.length }) });
        }
        else {
            this.setState({ activeButtonLabel: this.i18n(this.state.i18nLabelKey, { "count": 0 }) });
        }
        /* Déclenchement de la fonction onChange éventuellement passée en propriété */
        if (this.state.onChange) {
            this.state.onChange(e);
        }
    };
    /**
     * @returns {any} les propriétés du fichier en consultation converties en attributs html data
     */
    UploadFileField.prototype.getDataFileProps = function () {
        var dataProps = {};
        if (this.state.defaultFile) {
            dataProps["data-file-id"] = this.state.defaultFile.id;
            dataProps["data-file-originalname"] = this.state.defaultFile.originalname;
            dataProps["data-file-name"] = this.state.defaultFile.name;
            dataProps["data-file-mime-type"] = this.state.defaultFile.mimeType;
            dataProps["data-file-encoding"] = this.state.defaultFile.encoding;
            dataProps["data-file-size"] = this.state.defaultFile.size;
        }
        return dataProps;
    };
    /**
     * @override
     */
    UploadFileField.prototype.setCurrentValue = function (formData) {
        //let value:any = _.get(formData, this.state.name);
        if (!formData) {
            this.handleDelete();
        }
        this.setState({
            readOnlyFile: formData,
            defaultFile: formData
        });
        return this;
    };
    UploadFileField.prototype.registerUploadFieldElement = function (elt) {
        this.registerHtmlElement(elt);
        this.inputFileElement = elt;
    };
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     */
    UploadFileField.prototype.renderWidget = function () {
        var _this = this;
        logger.info("Rendu composant UploadFileField");
        var preview = "";
        if (this.props.renderPreviewFile) {
            preview = this.props.renderPreviewFile(this.state.readOnlyFile);
        }
        /* On n'inclut pas les propriétés spécifiques ou celles dont on surcharge la valeur */
        var htmlProps = _.omit(this.getHtmlProps(), ["defaultFile", "type", "onChange"]);
        _.assign(htmlProps, { "className": htmlProps["className"] ? htmlProps["className"] + " uploadfile" : " uploadfile" });
        _.assign(htmlProps, { "data-multiple-caption": this.state.fileSelectedLabel });
        var cssDelete = (this.props.classNameDelete) ? "hornet-button hornet-button-right upload-delete-button " + this.props.classNameDelete : "hornet-button hornet-button-right upload-delete-button";
        /* On ne peut assigner programmatiquement la valeur d'un champ de type fichier (problème de sécurité potentiel)
         * on utilise donc ici les attributs data-* pour stocker les propriétés de l'éventuel fichier déjà sélectionné.
         * Celles-ci seront ensuite récupérées lors de l'envoi du formulaire, si un autre fichier n'a pas été sélectionné.*/
        var dataProps = this.getDataFileProps();
        var inputFile = React.createElement("input", tslib_1.__assign({ ref: function (elt) {
                _this.registerUploadFieldElement(elt);
            }, type: "file", onChange: this.handleChange }, dataProps, htmlProps));
        var labelProps = {
            htmlFor: htmlProps["id"],
            readOnly: htmlProps["readOnly"],
            className: "upload-content"
        };
        var aProps = {
            href: "#",
            onClick: this.downloadButtonActionHandler,
            onKeyDown: this.downloadButtonKeyDownHandler,
            disabled: htmlProps["readOnly"],
            "aria-haspopup": true
        };
        return (React.createElement("div", { className: "upload-container" },
            inputFile,
            React.createElement("label", tslib_1.__assign({}, labelProps),
                React.createElement("a", tslib_1.__assign({}, aProps),
                    React.createElement("span", { className: "upload-text" }, this.state.activeButtonLabel))),
            (this.htmlElement) && this.htmlElement.files.length ?
                React.createElement("button", { type: "button", className: cssDelete, onClick: this.handleDelete, "aria-label": this.i18n("uploadFile.labelSupprimer"), disabled: this.state.readOnly }, "X")
                : "",
            preview));
    };
    /* suppression du fichier sélectionné  dans le champs input */
    UploadFileField.prototype.handleDelete = function () {
        this.htmlElement.value = "";
        this.setState({ defaultFile: null, activeButtonLabel: this.i18n(this.state.i18nLabelKey, { "count": 0 }) });
    };
    /**
     * Déclenchement d'un click sur l'input file afin d'ouvrir la boite de dialogue
     * d'upload de fichier
     */
    UploadFileField.prototype.downloadButtonActionHandler = function () {
        this.inputFileElement.click();
    };
    /**
     * Appel au gestionnaire d'action pour l'ouverture de la boite de dialogue
     * uniquement sur presse des touches entrée et espace
     * @param e
     */
    UploadFileField.prototype.downloadButtonKeyDownHandler = function (e) {
        if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
            var keyCode = e.keyCode;
            if (keyCode == key_codes_1.KeyCodes.ENTER || keyCode == key_codes_1.KeyCodes.SPACEBAR) {
                this.downloadButtonActionHandler();
            }
        }
    };
    UploadFileField.defaultProps = _.assign(abstract_field_1.AbstractField.defaultProps, {
        fileSelectedLabel: UploadFileField.getI18n("uploadFile.selectedFile", { "count": 0 }),
        i18nLabelKey: "uploadFile.selectedFile"
    });
    return UploadFileField;
}(abstract_field_1.AbstractField));
exports.UploadFileField = UploadFileField;



/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var abstract_field_datasource_1 = __webpack_require__(307);
var _ = __webpack_require__(6);
var object_utils_1 = __webpack_require__(315);
/**
 * Composant liste déroulante
 */
var SelectField = /** @class */ (function (_super) {
    tslib_1.__extends(SelectField, _super);
    function SelectField(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (_this.state.dataSource && _this.state.data) {
            throw new Error("Le SelectField " + _this.state.name + " possède une props dataSource et une props data");
        }
        return _this;
    }
    /**
     * Génère le rendu spécifique du champ : une liste déroulante dont les éléments correspondent au tableau dataSource
     * @returns {any}
     */
    SelectField.prototype.renderWidget = function () {
        var _this = this;
        var hasError = this.hasErrors() ? " has-error" : "";
        var htmlProps = this.getHtmlProps();
        _.assign(htmlProps, { "className": htmlProps["className"] ? htmlProps["className"] + " selectfield" + hasError : " selectfield" + hasError, value: this.state.currentValue });
        var hasData = this.state.data && this.state.data.length > 0;
        var hasDataSource = this.state.dataSource && this.state.dataSource.results && this.state.dataSource.results.length > 0;
        if (this.state.currentValue == undefined) {
            if (hasDataSource && this.state.items && Array.isArray(this.state.items)) {
                htmlProps.value = this.state.items[0][this.state.valueKey];
            }
            else if (hasData) {
                htmlProps.value = this.state.data[0][this.state.valueKey];
            }
        }
        return (React.createElement("select", tslib_1.__assign({ onChange: function (e) { _this.handleChange(e); }, ref: function (elt) { return _this.registerHtmlElement(elt); } }, htmlProps),
            hasDataSource ? this.renderOptionsDataSource() : null,
            hasData ? this.state.data.map(this.renderOption) : null));
    };
    // Setters
    SelectField.prototype.setData = function (data, cb) {
        this.setState({ data: data }, cb);
        return this;
    };
    SelectField.prototype.setValueKey = function (key, cb) {
        this.setState({ valueKey: key }, cb);
        return this;
    };
    SelectField.prototype.setLabelKey = function (key, cb) {
        this.setState({ labelKey: key }, cb);
        return this;
    };
    /**
     * Override
     * @param state
     */
    SelectField.prototype.processHtmlProps = function (state) {
        _super.prototype.processHtmlProps.call(this, state);
        if (state.readOnly === true) {
            state.disabled = true;
        }
    };
    /**
     * Génère le rendu du selectField à partir d'un dataSource
     * @returns {any}
     */
    SelectField.prototype.renderOptionsDataSource = function () {
        if (this.state.items && this.state.items.length > 0) {
            return this.state.items.map(this.renderOption);
        }
    };
    /**
     * Génère le rendu d'un radio bouton et son libellé
     * @param choice choix sélectionnable
     * @returns {any}
     */
    SelectField.prototype.renderOption = function (choice) {
        var _value = object_utils_1.ObjectUtils.getSubObject(choice, this.state.valueKey);
        var _label = object_utils_1.ObjectUtils.getSubObject(choice, this.state.labelKey);
        var value = (_value != null && _value.toString) ? _value.toString() : "";
        var label = (_label != null && _label.toString) ? _label.toString() : value;
        var optionsProps = {
            key: this.state.name + "-" + label + "-" + value,
            value: value
        };
        return React.createElement("option", tslib_1.__assign({}, optionsProps), label);
    };
    /**
     *
     * @param value
     */
    SelectField.prototype.selectItemByValue = function (value) {
        var hasDataSource = this.state.dataSource && this.state.dataSource.results && this.state.dataSource.results.length > 0;
        if (hasDataSource) {
            for (var index = 0; index < this.state.dataSource.results.length; index++) {
                var element = this.state.dataSource.results[index];
                if (element[this.state.valueKey] == value) {
                    this.state.dataSource.select(element);
                    break;
                }
            }
        }
    };
    /**
     * @override
     */
    SelectField.prototype.setCurrentValue = function (value) {
        _super.prototype.setCurrentValue.call(this, value);
        this.selectItemByValue(value);
        return this;
    };
    /**
     * @override
     */
    SelectField.prototype.handleChange = function (e) {
        this.setCurrentValue(e.target.value);
    };
    SelectField.defaultProps = _.assign(_.cloneDeep(abstract_field_datasource_1.AbstractFieldDatasource.defaultProps), {
        labelClass: "blocLabelUp",
        valueKey: "value",
        labelKey: "label"
    });
    return SelectField;
}(abstract_field_datasource_1.AbstractFieldDatasource));
exports.SelectField = SelectField;



/***/ }),
/* 344 */,
/* 345 */,
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var spinner_component_1 = __webpack_require__(102);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.spinner.spinner-component-input");
/**
 * Composant affichant une image sur un champ type field
 */
var SpinnerComponentInput = /** @class */ (function (_super) {
    tslib_1.__extends(SpinnerComponentInput, _super);
    function SpinnerComponentInput(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    SpinnerComponentInput.prototype.render = function () {
        return (React.createElement("div", { style: { "visibility": this.state.isVisible ? "visible" : "hidden" }, className: "component-spinner spinner-input spinner-loading" }));
    };
    return SpinnerComponentInput;
}(spinner_component_1.SpinnerComponent));
exports.SpinnerComponentInput = SpinnerComponentInput;



/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(3);
/**
 * Ligne de formulaire
 */
var Row = /** @class */ (function (_super) {
    tslib_1.__extends(Row, _super);
    /**
     * Construit une instance de Row
     * @param props propriétés
     * @param context contexte
     */
    function Row(props, context) {
        return _super.call(this, props, context) || this;
    }
    // Setters
    /**
     * Initialise la ou les classe(s) CSS de ce composant
     * @param className nom(s) de classe(s) CSS
     * @param callback fonction à appeler éventuellemnt
     * @returns {Row} ce composant
     */
    Row.prototype.setClassName = function (className, callback) {
        this.setState({ className: className }, callback);
        return this;
    };
    /**
     * @returns {number} le diviseur de fraction à utiliser pour les noeuds enfants
     */
    Row.prototype.getPureChildFraction = function () {
        var fraction = 0;
        React.Children.forEach(this.state.children, function (child) {
            var childSpan = 1;
            if (child && child.props) {
                if (child.props.groupClass) {
                    var classTab = child.props.groupClass.split("-");
                    (classTab.length && (classTab.length - 1) && !isNaN(classTab[classTab.length - 1])) ?
                        childSpan = classTab[classTab.length - 1] : 1;
                }
                fraction += Number(childSpan);
            }
        });
        return fraction;
    };
    /**
     * @inheritDoc
     */
    Row.prototype.render = function () {
        /* Affecte automatiquement la classe pure css aux noeuds enfants qui n'en ont pas */
        var fraction = this.getPureChildFraction();
        var className = "has-gutter " + this.state.className;
        if (fraction != 1) {
            className += "-" + fraction;
        }
        return (React.createElement("div", { className: className }, React.Children.map(this.state.children, function (child, i) {
            if (child && child.props && child.props.name) {
                // définition des props des champs de formulaire enfants
                var childPropsSetByParent = {
                    groupClass: child.props.groupClass || ""
                };
                return React.cloneElement(child, childPropsSetByParent);
            }
            else {
                return child;
            }
        })));
    };
    /** Propriétés par défaut */
    Row.defaultProps = {
        className: "grid"
    };
    return Row;
}(hornet_component_1.HornetComponent));
exports.Row = Row;



/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(258);
var modal_1 = __webpack_require__(99);
var _ = __webpack_require__(6);
var moment = __webpack_require__(26);
var date_utils_1 = __webpack_require__(104);
var input_field_1 = __webpack_require__(290);
var key_codes_1 = __webpack_require__(10);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.calendar-fied");
var RcCalendar = null;
var defaultLocale = date_utils_1.DateUtils.default_locale;
if (!hornet_js_utils_1.Utils.isServer) {
    logger.trace("Execution sur le CLIENT(NAVIGATEUR)");
    RcCalendar = __webpack_require__(413);
    /* Patch de la méthode getTitleString utilisée pour afficher la date correspondant au jour survolé dans le calendrier */
    var rcCalendarUtil = __webpack_require__(270);
    if (rcCalendarUtil && rcCalendarUtil.getTitleString) {
        rcCalendarUtil.getTitleString = function (value) {
            /* On renvoie une chaîne vide car le formattage de la date dépend de la locale qui est propre à chaque
             instance de calendar. */
            return "";
        };
    }
}
else {
    logger.trace("Execution sur le SERVEUR");
}
/**
 * Composant Calendrier
 */
var CalendarField = /** @class */ (function (_super) {
    tslib_1.__extends(CalendarField, _super);
    function CalendarField(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.hasKeyPress = false;
        var calendarLocale = hornet_js_utils_1.Utils.getCls("hornet.internationalization") ?
            _this.i18n("calendar") : { "dateFormat": "DD/MM/YYYY" };
        /*récupération de la locale d'internationalisation*/
        var internationalisation = hornet_js_utils_1.Utils.getCls("hornet.internationalization");
        var language;
        if (internationalisation) {
            language = internationalisation.locale;
        }
        else {
            language = defaultLocale;
        }
        /* attribut HTML size du champ de saisie */
        var inputSize = calendarLocale.dateFormat.length;
        _this.state.isVisible = false;
        _this.state.calendarLocale = calendarLocale;
        _this.state.language = language;
        _this.state.inputSize = inputSize;
        if (!props.placeHolder) {
            _this.state.placeHolder = _this.i18n("calendar.placeHolder");
        }
        _this.state.currentValue = "";
        _this.state.messageValidation = _this.i18n("form.validation.format", { field: _this.state.label });
        return _this;
    }
    /**
     * Récupère le format d'affichage des dates
     */
    CalendarField.prototype.getFormat = function () {
        var internationalisation = hornet_js_utils_1.Utils.getCls("hornet.internationalization");
        var dateFormat = internationalisation.messages.calendar.dateFormat;
        return dateFormat;
    };
    /**
     * Génère le rendu spécifique du champ : un datePicker
     * @returns {any}
     */
    CalendarField.prototype.renderWidget = function () {
        var _this = this;
        logger.trace("render CalendarField");
        var reactIconTag;
        var reactCalendarDialogueTag;
        if (this.state.isDatePicker) {
            reactIconTag =
                React.createElement("button", { className: "agenda icon", type: "button", onClick: this.showCalendar, title: this.state.title || this.state.calendarLocale.agendaTitle, disabled: this.state.readOnly || this.state.disabled, "aria-haspopup": true, value: "calendar" },
                    React.createElement("img", { src: CalendarField.genUrlTheme("/img/calendar/icon_calendar.svg"), alt: this.state.title || this.state.calendarLocale.agendaTitle }));
            /*RcCalendar prend un Moment en paramètre*/
            var date = _.clone(this.state.currentValue);
            var currentDate = void 0;
            if (!date) {
                currentDate = moment();
            }
            else {
                currentDate = moment(date, this.state.calendarLocale.dateFormat);
            }
            if (!currentDate.isValid()) {
                currentDate = moment();
            }
            currentDate.locale(this.state.language);
            var format = this.getFormat();
            if (format instanceof Array) {
                format = format[0];
            }
            reactCalendarDialogueTag =
                React.createElement(modal_1.Modal, { ref: "maModal", underlayClickExits: true, escapeKeyExits: true, title: this.state.calendarLocale.choiceDate }, !hornet_js_utils_1.Utils.isServer ?
                    React.createElement(RcCalendar, { formatter: format, defaultValue: currentDate, onSelect: this.setValueAndCloseCalendar, locale: this.state.calendarLocale, format: format, showDateInput: false }) :
                    null);
        }
        var htmlProps = this.getHtmlProps();
        var formatedValue = this.state.currentValue.length >= 1
            ? this.state.currentValue
            : "";
        htmlProps = _.assign(htmlProps, {
            type: "text",
            size: this.state.inputSize,
            value: formatedValue,
            onChange: this.handleInputChange,
            onKeyPress: this.handleInputKeyPress,
            onBlur: this.handleInputLeave
        });
        if (htmlProps.label == htmlProps.title) {
            htmlProps.title = undefined;
        }
        htmlProps.label = undefined;
        var hasError = this.hasErrors() ? " has-error" : "";
        var placeHolder = (!this.state.disabled && !this.state.readOnly)
            ? this.state.placeHolder
            : null;
        return (React.createElement("div", { className: "calendar-container" },
            React.createElement("input", tslib_1.__assign({}, htmlProps, { ref: function (elt) { return _this.registerHtmlElement(elt); }, className: "calendar-input" + hasError, placeholder: placeHolder })),
            !this.state.readOnly && !this.state.disabled && this.state.currentValue ? this.renderResetButton() : null,
            reactIconTag,
            reactCalendarDialogueTag));
    };
    /**
     * @override
     */
    CalendarField.prototype.setCurrentValue = function (value) {
        var _this = this;
        var res = value || "";
        if (typeof value === "number") {
            res = this.formatCalendarDate(value, this.state.calendarLocale);
        }
        else if (value instanceof Date) {
            res = this.formatCalendarDate(value.getTime(), this.state.calendarLocale);
        }
        this.setState({ currentValue: res, valued: (value !== "" && value), errors: [] }, function () {
            if (_this.state.onValueChange)
                _this.state.onValueChange(_this.state.currentValue);
        });
        return this;
    };
    /**time
     * @override
     */
    CalendarField.prototype.resetValue = function () {
        var _this = this;
        var res = this.formatCalendarDate(null, this.state.calendarLocale);
        this.setState({ currentValue: res, valued: false }, function () {
            if (_this.state.onSelect) {
                if (_this.state.onSelect) {
                    _this.state.onSelect(res);
                }
            }
            if (_this.state.onChange) {
                _this.state.onChange(null);
            }
            if (_this.state.onValueChange) {
                _this.state.onValueChange(_this.state.currentValue);
            }
            if (_this.htmlElement && _this.htmlElement.onchange) {
                _this.htmlElement.onchange();
            }
        });
    };
    /**
     * Méthode délenchée lors d'une intéraction avec le champ input du composant Calendar
     * @param e
     */
    CalendarField.prototype.handleInputChange = function (e) {
        var _this = this;
        /* L'attribut DOM onChange est éventuellement aussi renseigné sur le composant */
        if (this.state.onChange) {
            this.state.onChange(e);
        }
        var input = e.target;
        if (input.value && !this.state.valued) {
            this.setState({ valued: true });
        }
        else if (!input.value && this.state.valued) {
            this.setState({ valued: false });
        }
        if (this.state.currentValue != input.value) {
            this.setState({ currentValue: input.value }, function () {
                if (_this.state.onValueChange)
                    _this.state.onValueChange(_this.state.currentValue);
            });
        }
    };
    /**
     * Méthode délenchée lorsque l'utilisateur quitte l'input du composant Calendar
     * @param e
     */
    CalendarField.prototype.handleInputLeave = function (e) {
        var _this = this;
        /* transforme la date au format définit */
        var input = e.target;
        var text = input.value;
        if (text.length > 0) {
            var format = this.getFormat();
            var time = moment(text, format, true);
            if (time.isValid()) {
                if (format instanceof Array) {
                    var newText = time.format(format[0]);
                    this.setState({ currentValue: newText }, function () {
                        if (_this.state.onValueChange)
                            _this.state.onValueChange(_this.state.currentValue);
                    });
                }
                else {
                    var newText = time.format(format);
                    this.setState({ currentValue: newText });
                }
            }
            else {
                if (this.state.valideOnForm) {
                    this.setState({ currentValue: text }, function () {
                        if (_this.state.onValueChange)
                            _this.state.onValueChange(_this.state.currentValue);
                    });
                }
                else {
                    if (this.hasKeyPress) {
                        this.setState({ errors: [{ field: this.state.name, text: this.state.messageValidation }] }, function () {
                            _this.htmlElement.focus();
                        });
                        this.hasKeyPress = false;
                    }
                    else {
                        this.setState({ currentValue: "", errors: [] }, function () {
                            if (_this.state.onValueChange)
                                _this.state.onValueChange(_this.state.currentValue);
                        });
                    }
                }
            }
        }
        if (this.props.onBlur) {
            this.props.onBlur(e);
        }
    };
    /**
     * Controle des touches claviers
     * @param e
     */
    CalendarField.prototype.handleInputKeyPress = function (e) {
        var _this = this;
        var text = e.target.value;
        var time = moment(text, this.getFormat());
        if (this.state.onKeyPress) {
            this.state.onKeyPress(event);
        }
        var key = e.key;
        if (key == key_codes_1.KEYNAMES.ArrowDown) {
            if (time.isValid()) {
                time.add(1, "days");
                this.setState({ currentValue: time.toDate() }, function () {
                    if (_this.state.onValueChange)
                        _this.state.onValueChange(_this.state.currentValue);
                });
            }
            e.preventDefault();
        }
        else if (key == key_codes_1.KEYNAMES.ArrowUp) {
            if (time.isValid()) {
                time.add(1, "days");
                this.setState({ currentValue: time.toDate() }, function () {
                    if (_this.state.onValueChange)
                        _this.state.onValueChange(_this.state.currentValue);
                });
            }
            e.preventDefault();
        }
        else if (key == key_codes_1.KEYNAMES.Home) {
            this.setState({ currentValue: new Date() }, function () {
                if (_this.state.onValueChange)
                    _this.state.onValueChange(_this.state.currentValue);
            });
            e.preventDefault();
        }
        else if ((/[-.\/]/.test(key)) || (/\d/.test(key))
            || ((key.toUpperCase() == "A" || key.toUpperCase() == "C" || key.toUpperCase() == "V" || key.toUpperCase() == "X") && e.ctrlKey)) {
            if (key != "Tab") {
                this.hasKeyPress = true;
            }
        }
        else if (key != key_codes_1.KEYNAMES.Enter) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    /**
     * @param time temps en millisecondes depuis Epoch
     * @param calendarLocale propriétés localisées du calendrier
     */
    CalendarField.prototype.formatCalendarDate = function (time, calendarLocale) {
        var strValue;
        try {
            if (time) {
                var format = this.getFormat();
                strValue = moment(time).format(format);
            }
        }
        catch (err) {
            logger.trace("Erreur pour formater la date suivante:", err);
        }
        if (!strValue) {
            strValue = "";
        }
        logger.trace("Date formatée : ", strValue + "  -- à partir de la valeur", time);
        return strValue;
    };
    /**
     * Met à jour la valeur et déclenche la fermeture de la popup de calendrier
     * @param value {Moment} instance de Moment
     */
    CalendarField.prototype.setValueAndCloseCalendar = function (value) {
        var _this = this;
        if (value != null) {
            this.setState({
                currentValue: this.formatCalendarDate(value, this.state.calendarLocale),
                valued: value != ""
            }, function () {
                _this.hideCalendar();
                if (_this.state.onSelect) {
                    _this.state.onSelect(value);
                }
                if (_this.state.onValueChange) {
                    _this.state.onValueChange(_this.state.currentValue);
                }
            });
        }
        else {
            if (this.state.onSelect) {
                this.state.onSelect(value);
            }
            if (this.state.onValueChange) {
                this.state.onValueChange(value);
            }
        }
    };
    /**
     * Permet de mettre à jour la valeur du datePicker
     * @param value
     * @returns {this}
     */
    CalendarField.prototype.setValue = function (value) {
        this.setState({
            currentValue: this.formatCalendarDate(value, this.state.calendarLocale),
            valued: value != ""
        });
        return this;
    };
    /**
     * Permet d'afficher la modal contenant le calendier
     * @returns {Calendar}
     */
    CalendarField.prototype.showCalendar = function () {
        if (!this.state.disabled && !this.state.readOnly) {
            this.refs.maModal.open();
        }
        return this;
    };
    /**
     * Permet de masquer la modal contenant le calendier
     * @returns {Calendar}
     */
    CalendarField.prototype.hideCalendar = function () {
        this.refs.maModal.close();
        return this;
    };
    CalendarField.prototype.getCurrentValue = function () {
        if (this.state.valideOnForm) {
            return hornet_js_utils_1.Utils.dateUtils.parseInTZ(this.state.currentValue, this.getFormat(), hornet_js_utils_1.Utils.dateUtils.TZ_EUROPE_PARIS) || this.state.currentValue;
        }
        else {
            return hornet_js_utils_1.Utils.dateUtils.parseInTZ(this.state.currentValue, this.getFormat(), hornet_js_utils_1.Utils.dateUtils.TZ_EUROPE_PARIS);
        }
    };
    CalendarField.defaultProps = _.assign(abstract_field_1.AbstractField.defaultProps, {
        disabled: false,
        isDatePicker: true,
        valideOnForm: true
    });
    return CalendarField;
}(input_field_1.InputField));
exports.CalendarField = CalendarField;



/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(3);
/**
 * Génère le rendu d'un ou plusieurs message d'erreur de validation au-dessus d'un champ de formulaire
 */
var FieldError = /** @class */ (function (_super) {
    tslib_1.__extends(FieldError, _super);
    function FieldError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    FieldError.prototype.render = function () {
        var _this = this;
        /* Filtrage des erreurs correspondant au nom du champ*/
        var fieldErrors;
        if (this.state.errors) {
            fieldErrors = this.state.errors.filter(function (error) {
                return (error.field == this.state.fieldName && !this.state.hideError);
            }, this);
        }
        else {
            fieldErrors = new Array(0);
        }
        return (fieldErrors.length > 0 ?
            React.createElement("div", { className: "fielderror-container" }, fieldErrors.map(function (error) {
                return React.createElement("div", { key: error.id, className: "fielderror-content formmgr-message-text", id: _this.props.fieldName + "-error" }, error.text);
            })) : null);
    };
    FieldError.defaultProps = {
        errors: new Array(0)
    };
    return FieldError;
}(hornet_component_1.HornetComponent));
exports.FieldError = FieldError;



/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var html_const_attributes_1 = __webpack_require__(351);
var _ = __webpack_require__(6);
/**
 * Object contenant toutes les propriétés standards HTML définies dans HornetHTMLAttributes.
 * Sert à vérifier si une propriété est une propriété standard HTML.
 */
exports.HTML_ATTRIBUTES = _.assign(html_const_attributes_1.HtmlAttributes.HTML_NON_STANDARD_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_RDFA_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_CONFIG_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_PRESENTATION_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_FORM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_GLOBAL_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_MEDIA_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_META_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_CLIPBOARD_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_COMPOSE_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_FOCUS_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_FORM_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_IMAGE_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_KEYBOARD_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_MEDIA_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_BASIC_MOUSE_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_DRAG_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_SELECT_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_TOUCH_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_SCROLL_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_WHEEL_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_ANIMATION_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_TRANSITION_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_BASIC_DOM_ATTRIBUTES);



/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// TODO tetaudf - retirer les constantes en évitant la valorisation explicite grâce au décorateur @AutoInit
exports.HTML_STANDARD_CONFIG_ATTRIBUTES = {
    accept: "",
    acceptCharset: "",
    action: "",
    autoComplete: "",
    charSet: "",
    challenge: "",
    checked: true,
    classID: "",
    dateTime: "",
    default: true,
    defer: true,
    disabled: true,
    download: null,
    encType: "",
    high: 1,
    href: "",
    hrefLang: "",
    htmlFor: "",
    inputMode: "",
    integrity: "",
    is: "",
    keyParams: "",
    keyType: "",
    list: "",
    low: 1,
    manifest: "",
    method: "",
    multiple: true,
    name: "",
    open: true,
    optimum: 1,
    pattern: "",
    placeholder: "",
    radioGroup: "",
    readOnly: true,
    rel: "",
    role: "",
    sandbox: "",
    scrolling: "",
    seamless: true,
    sizes: "",
    summary: "",
    target: "",
    type: "",
    useMap: ""
};
exports.HTML_STANDARD_FORM_ATTRIBUTES = {
    form: "",
    formAction: "",
    formEncType: "",
    formMethod: "",
    formNoValidate: true,
    formTarget: "",
    noValidate: true,
    required: true,
    wrap: ""
};
exports.HTML_STANDARD_GLOBAL_ATTRIBUTES = {
    accessKey: "",
    className: "",
    contentEditable: true,
    contextMenu: "",
    data: "",
    dir: "",
    draggable: true,
    hidden: true,
    id: "",
    lang: "",
    spellCheck: true,
    style: null,
    tabIndex: 1,
    title: ""
};
exports.HTML_STANDARD_MEDIA_ATTRIBUTES = {
    allowFullScreen: true,
    allowTransparency: true,
    async: true,
    autoPlay: true,
    capture: true,
    controls: true,
    coords: "",
    crossOrigin: "",
    kind: "",
    label: "",
    loop: true,
    media: "",
    mediaGroup: "",
    muted: true,
    poster: "",
    preload: "",
    src: "",
    srcLang: "",
    srcSet: "",
    wmode: ""
};
exports.HTML_STANDARD_META_ATTRIBUTES = {
    content: "",
    httpEquiv: ""
};
exports.HTML_STANDARD_PRESENTATION_ATTRIBUTES = {
    alt: "",
    autoFocus: true,
    cellPadding: "",
    cellSpacing: "",
    cols: 1,
    colSpan: 1,
    frameBorder: "",
    headers: "",
    height: "",
    icon: "",
    marginHeight: 1,
    marginWidth: 1,
    max: "",
    maxLength: 1,
    min: "",
    minLength: 1,
    rows: 1,
    rowSpan: 1,
    scope: "",
    scoped: true,
    selected: true,
    shape: "",
    size: 1,
    span: 1,
    srcDoc: "",
    start: 1,
    step: "",
    width: ""
};
exports.HTML_RDFA_ATTRIBUTES = {
    about: "",
    datatype: "",
    inlist: null,
    prefix: "",
    property: "",
    resource: "",
    typeof: "",
    vocab: ""
};
exports.HTML_NON_STANDARD_ATTRIBUTES = {
    autoCapitalize: "",
    autoCorrect: "",
    autoSave: "",
    color: "",
    itemProp: "",
    itemScope: true,
    itemType: "",
    itemID: "",
    itemRef: "",
    results: 1,
    security: "",
    unselectable: true
};
exports.REACT_CLIPBOARD_DOM_ATTRIBUTES = {
    onCopy: null,
    onCut: null,
    onPaste: null
};
exports.REACT_COMPOSE_DOM_ATTRIBUTES = {
    onCompositionEnd: null,
    onCompositionStart: null,
    onCompositionUpdate: null
};
exports.REACT_FOCUS_DOM_ATTRIBUTES = {
    onFocus: null,
    onBlur: null
};
exports.REACT_FORM_DOM_ATTRIBUTES = {
    onChange: null,
    onInput: null,
    onSubmit: null
};
exports.REACT_IMAGE_DOM_ATTRIBUTES = {
    onLoad: null,
    onError: null
};
exports.REACT_KEYBOARD_DOM_ATTRIBUTES = {
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null
};
exports.REACT_MEDIA_DOM_ATTRIBUTES = {
    onAbort: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onDurationChange: null,
    onEmptied: null,
    onEncrypted: null,
    onEnded: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onProgress: null,
    onRateChange: null,
    onSeeked: null,
    onSeeking: null,
    onStalled: null,
    onSuspend: null,
    onTimeUpdate: null,
    onVolumeChange: null,
    onWaiting: null
};
exports.REACT_BASIC_MOUSE_DOM_ATTRIBUTES = {
    onClick: null,
    onContextMenu: null,
    onDoubleClick: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null
};
exports.REACT_DRAG_DOM_ATTRIBUTES = {
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null
};
exports.REACT_SELECT_DOM_ATTRIBUTES = {
    onSelect: null
};
exports.REACT_TOUCH_DOM_ATTRIBUTES = {
    onTouchCancel: null,
    onTouchEnd: null,
    onTouchMove: null,
    onTouchStart: null
};
exports.REACT_SCROLL_DOM_ATTRIBUTES = {
    onScroll: null
};
exports.REACT_WHEEL_DOM_ATTRIBUTES = {
    onWheel: null
};
exports.REACT_ANIMATION_DOM_ATTRIBUTES = {
    onAnimationStart: null,
    onAnimationEnd: null,
    onAnimationIteration: null
};
exports.REACT_TRANSITION_DOM_ATTRIBUTES = {
    onTransitionEnd: null
};
exports.REACT_BASIC_DOM_ATTRIBUTES = {};
// TODO tetaudf utiliser un decorator @AutoInit pour ne plus avoir à déclarer un objet avec des valeurs par défaut
// TODO tetaudf ex : @AutoInit
// TODO tetaudf      HTML_STANDARD_CONFIG_ATTRIBUTES: HTMLStandardConfigAttributes;
var HtmlAttributes = /** @class */ (function () {
    function HtmlAttributes() {
    }
    HtmlAttributes.HTML_STANDARD_CONFIG_ATTRIBUTES = exports.HTML_STANDARD_CONFIG_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_FORM_ATTRIBUTES = exports.HTML_STANDARD_FORM_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_GLOBAL_ATTRIBUTES = exports.HTML_STANDARD_GLOBAL_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_MEDIA_ATTRIBUTES = exports.HTML_STANDARD_MEDIA_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_META_ATTRIBUTES = exports.HTML_STANDARD_META_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_PRESENTATION_ATTRIBUTES = exports.HTML_STANDARD_PRESENTATION_ATTRIBUTES;
    HtmlAttributes.HTML_RDFA_ATTRIBUTES = exports.HTML_RDFA_ATTRIBUTES;
    HtmlAttributes.HTML_NON_STANDARD_ATTRIBUTES = exports.HTML_NON_STANDARD_ATTRIBUTES;
    HtmlAttributes.REACT_CLIPBOARD_DOM_ATTRIBUTES = exports.REACT_CLIPBOARD_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_COMPOSE_DOM_ATTRIBUTES = exports.REACT_COMPOSE_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_FOCUS_DOM_ATTRIBUTES = exports.REACT_FOCUS_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_FORM_DOM_ATTRIBUTES = exports.REACT_FORM_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_IMAGE_DOM_ATTRIBUTES = exports.REACT_IMAGE_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_KEYBOARD_DOM_ATTRIBUTES = exports.REACT_KEYBOARD_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_MEDIA_DOM_ATTRIBUTES = exports.REACT_MEDIA_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_BASIC_MOUSE_DOM_ATTRIBUTES = exports.REACT_BASIC_MOUSE_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_DRAG_DOM_ATTRIBUTES = exports.REACT_DRAG_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_SELECT_DOM_ATTRIBUTES = exports.REACT_SELECT_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_TOUCH_DOM_ATTRIBUTES = exports.REACT_TOUCH_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_SCROLL_DOM_ATTRIBUTES = exports.REACT_SCROLL_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_WHEEL_DOM_ATTRIBUTES = exports.REACT_WHEEL_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_ANIMATION_DOM_ATTRIBUTES = exports.REACT_ANIMATION_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_TRANSITION_DOM_ATTRIBUTES = exports.REACT_TRANSITION_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_BASIC_DOM_ATTRIBUTES = exports.REACT_BASIC_DOM_ATTRIBUTES;
    return HtmlAttributes;
}());
exports.HtmlAttributes = HtmlAttributes;
;



/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(3);
var key_codes_1 = __webpack_require__(10);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-component.widget.tool-tip.tool-tip");
/**
 * Composant ToolTip
 */
var ToolTip = /** @class */ (function (_super) {
    tslib_1.__extends(ToolTip, _super);
    function ToolTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ToolTip.prototype.render = function () {
        var urlIcoTooltip = this.state.src || ToolTip.genUrlTheme(this.state.icoToolTip);
        return (React.createElement("span", { onFocus: this.showTip, onMouseOver: this.showTip, onBlur: this.hideTip, onMouseLeave: this.hideTip, className: this.state.classSpan, "aria-haspopup": true, role: "tooltip" },
            React.createElement("img", { id: this.state.idImg, alt: this.state.alt, src: urlIcoTooltip, className: this.state.classImg, tabIndex: 0 }),
            React.createElement("span", { id: this.state.idSpan, className: "tooltip-label", role: "tooltip", "aria-hidden": "true", style: { display: "none" } }, this.state.alt)));
    };
    /**
     * @inheritDoc
     */
    ToolTip.prototype.componentDidMount = function () {
        document.addEventListener("keydown", this.handleKeyDown, false);
    };
    /**
     * @inheritDoc
     */
    ToolTip.prototype.componentWillUnmount = function () {
        document.removeEventListener("keydown", this.handleKeyDown, false);
    };
    /**
     * Gestion des touches du clavier
     * @param event
     */
    ToolTip.prototype.handleKeyDown = function (event) {
        var keyCode = event.keyCode;
        if (keyCode == key_codes_1.KeyCodes.ESCAPE) {
            this.hideTip(event);
        }
    };
    /**
     * Fonction déclenchée lorsque le champ de saisie libre perd le focus
     * @param event
     */
    ToolTip.prototype.hideTip = function (event) {
        if (this.state.idSpan) {
            document.getElementById(this.state.idSpan).setAttribute("aria-hidden", "true");
            document.getElementById(this.state.idSpan).style.display = "none";
        }
    };
    ToolTip.prototype.showTip = function (event) {
        if (this.state.idSpan) {
            document.getElementById(this.state.idSpan).setAttribute("aria-hidden", "false");
            document.getElementById(this.state.idSpan).style.display = "inline";
        }
    };
    ToolTip.defaultProps = {
        classImg: "tooltip-image",
        classSpan: "tooltip",
        icoToolTip: "/img/tooltip/tooltip.svg"
    };
    return ToolTip;
}(hornet_component_1.HornetComponent));
exports.ToolTip = ToolTip;



/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var hornet_component_1 = __webpack_require__(3);
var _ = __webpack_require__(6);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.form");
/**
 * Composant permettant de rendre un formulaire Hornet de manière standardisée
 */
var AbstractForm = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractForm, _super);
    function AbstractForm(props, context) {
        return _super.call(this, props, context) || this;
    }
    AbstractForm.prototype.setReadOnly = function (value, callback) {
        this.setState({ readOnly: value }, callback);
        /* Propage la propriété à tous les champs du groupe */
        this.updateReadOnlyFields(value);
        return this;
    };
    AbstractForm.prototype.setDisabled = function (value, callback) {
        this.setState({ disabled: value }, callback);
        /* Propage la propriété à tous les champs du groupe */
        this.updateDisabledFields(value);
        return this;
    };
    AbstractForm.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.propagateParentState();
    };
    AbstractForm.prototype.registerForm = function (formInstance) {
        this.formElement = formInstance;
        if (this.formElement) {
            this.formElement["__component"] = this;
        }
    };
    AbstractForm.prototype.registerFieldSet = function (fieldSetInstance) {
        this.fieldSetElement = fieldSetInstance;
        if (this.fieldSetElement) {
            this.fieldSetElement["__component"] = this;
        }
    };
    /**
     * Met à jour la propriété readOnly sur chacun des champs enfants
     * @param isReadOnly valeur à assigner à la propriété 'readOnly'
     * @return cet objet
     */
    AbstractForm.prototype.updateReadOnlyFields = function (isReadOnly) {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field.props && field.props.writable && !isReadOnly) {
                if (field.setState && (field && field.mounted)) {
                    field.setState({ readOnly: isReadOnly });
                }
                else {
                    field.setReadOnly(isReadOnly);
                }
            }
            else if (field.getAttribute("data-writable") !== "false") {
                field.setReadOnly(isReadOnly);
            }
            else {
                field.setReadOnly(true);
            }
            return true;
        });
        return this;
    };
    /**
     * Met à jour la propriété disabled sur chacun des champs enfants
     * @param isDisabled valeur à assigner à la propriété 'disabled'
     * @return cet objet
     */
    AbstractForm.prototype.updateDisabledFields = function (isDisabled) {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            // if (field instanceof AbstractField) {
            if (field.setState && (field && field.mounted)) {
                field.setState({ disabled: isDisabled });
            }
            else {
                field.setDisabled(isDisabled);
            }
            // }
            return true;
        });
        return this;
    };
    /**
     * Propage les propriétés devant être transmises aux champs enfants
     */
    AbstractForm.prototype.propagateParentState = function () {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (this.state.readOnly == true) {
                field.setReadOnly(this.state.readOnly);
            }
            if (this.state.disabled == true) {
                field.setDisabled(this.state.disabled);
            }
            return true;
        }, this);
    };
    /**
     * Extrait les données du formulaire
     * @param removeEmptyStrings indique si les champs ayant pour valeur une chaîne de caractères vide ne doivent pas
     * être présents dans l'objet résultat.
     * @returns {Object}
     */
    AbstractForm.prototype.extractData = function (removeEmptyStrings) {
        if (removeEmptyStrings === void 0) { removeEmptyStrings = true; }
        var data = {};
        var fields = this.extractFields();
        for (var name_1 in fields) {
            var value = fields[name_1].getCurrentValue();
            if (value != "" || !removeEmptyStrings) {
                _.set(data, name_1, value);
            }
            else {
                /* Le champ est vide : si son nom correspond à une arborescence d'objets, on s'assure tout de même
                que l'objet parent existe */
                var lastDotIndex = name_1.lastIndexOf(".");
                if (lastDotIndex > 0) {
                    var parentPath = name_1.substring(0, lastDotIndex);
                    if (_.get(data, parentPath) == null) {
                        _.set(data, parentPath, {});
                    }
                }
            }
        }
        return data;
    };
    /** Valeur de propriétés par défaut */
    AbstractForm.defaultProps = {
        readOnly: false,
        disabled: false
    };
    return AbstractForm;
}(hornet_component_1.HornetComponent));
exports.AbstractForm = AbstractForm;



/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(258);
var auto_complete_selector_1 = __webpack_require__(355);
var _ = __webpack_require__(6);
var key_codes_1 = __webpack_require__(10);
var auto_complete_state_1 = __webpack_require__(314);
var datasource_master_1 = __webpack_require__(356);
var abstract_field_datasource_1 = __webpack_require__(307);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.auto-complete-field");
var FilterTextType;
(function (FilterTextType) {
    FilterTextType[FilterTextType["beginWith"] = 1] = "beginWith";
    FilterTextType[FilterTextType["indexOf"] = 2] = "indexOf";
})(FilterTextType = exports.FilterTextType || (exports.FilterTextType = {}));
/**
 * Composant d'auto-complétion.
 * Les fonctions getCurrentValue et setCurrentValue s'appuient sur le champ caché contenant la valeur sélectionnée.
 */
var AutoCompleteField = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteField, _super);
    function AutoCompleteField(props, context) {
        var _this = _super.call(this, props, context) || this;
        var ariaSelectorId = props.name + "_select";
        //liste des choix possibles
        _this.state.choices = [];
        //item sélectionné
        _this.state.selectedIndex = null;
        //indique si la liste des choix est visible ou non
        _this.state.shouldShowChoices = false;
        //identifiant du selector
        _this.state.ariaSelectorId = ariaSelectorId;
        //loader
        _this.state.isApiLoading = false;
        if (_this.props.dataSource.results) {
            //liste de tous les choix (non filtré par le texte)
            _this.state.allChoices = _this.props.dataSource.results;
        }
        _this.autoCompleteState = new auto_complete_state_1.AutoCompleteState();
        return _this;
    }
    /**
     * Setter indiquant que l'API est en cours d'exécution
     * @param value valeur à utiliser
     * @param callback fonction de callback éventuelle
     * @returns {AutoComplete}
     */
    AutoCompleteField.prototype.setIsApiLoading = function (value, callback) {
        this.setState({ isApiLoading: value }, callback);
        return this;
    };
    /**
     * Setter des choix du composant
     * @param value tableau de choix
     * @param callback fonction de callback éventuelle
     * @returns {AutoComplete}
     */
    AutoCompleteField.prototype.setChoices = function (value, callback) {
        this.setState({ choices: value }, callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.componentDidMount = function () {
        if (!hornet_js_utils_1.Utils.isServer) {
            if (!_.isUndefined(this.props["var"])) {
                logger.warn("The var props is only available in DEV");
            }
        }
        this.mounted = true;
        logger.trace("auto-complete componentDidMount");
        this._throttledTriggerAction = _.throttle(this.triggerAction, this.state.delay);
        this.props.dataSource.on("fetch", this.fetchEventCallback);
        this.props.dataSource.on("add", this.addEventCallback);
        this.props.dataSource.on("delete", this.setResultCallback);
        this.props.dataSource.on("sort", this.setResultCallback);
        this.props.dataSource.on("filter", this.filterEventCallback);
        this.props.dataSource.on("init", this.initEventCallback);
        this.props.dataSource.on("loadingData", this.displaySpinner);
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.mounted = false;
        this.props.dataSource.removeListener("fetch", this.fetchEventCallback);
        this.props.dataSource.removeListener("add", this.addEventCallback);
        this.props.dataSource.removeListener("filter", this.filterEventCallback);
        this.props.dataSource.removeListener("init", this.initEventCallback);
        this.props.dataSource.removeListener("delete", this.setResultCallback);
        this.props.dataSource.removeListener("sort", this.setResultCallback);
        this.props.dataSource.removeListener("loadingData", this.displaySpinner);
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.componentWillUpdate = function (nextProps, nextState, nextContext) {
        _super.prototype.componentWillUpdate.call(this, nextProps, nextState, nextContext);
        if (this.state.delay != nextState.delay) {
            /* Le délai d'appel de l'action a changé : on doit donc refaire ici l'encaspulation avec _.throttle */
            this._throttledTriggerAction = _.throttle(this.triggerAction, nextState.delay);
        }
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        if (this.state.shouldShowChoices != nextState.shouldShowChoices
            || this.state.listDefaultValue !== nextState.listDefaultValue
            || ((nextState.choices && !this.state.choices)
                || (!nextState.choices && this.state.choices)
                || (nextState.choices && this.state.choices.length != nextState.choices.length))
            || !_.isEqual(nextState.choices, this.state.choices)
            || (this.state.errors != nextState.errors)
            || (this.state.readOnly != nextState.readOnly)
            || (this.state.disabled != nextState.disabled)) {
            return true;
        }
        return false;
    };
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     */
    AutoCompleteField.prototype.renderWidget = function () {
        logger.trace("auto-complete  render");
        var shouldShow = this.shouldShowChoices();
        var hasError = this.hasErrors() ? " has-error" : "";
        var className = " autocomplete-content" + hasError;
        if (this.state.className) {
            className += " " + this.state.className;
        }
        var htmlProps = this.getHtmlProps();
        htmlProps = _.assign(htmlProps, {
            "onKeyDown": this.handleOnKeyDown,
            "onFocus": this.handleOnFocus,
            "onBlur": this.handleOnBlur,
            "onDoubleClick": this.handleOnFocus,
            "onClick": this.handleOnFocus,
            "onChange": this.handleChangeTextInput,
            "autoComplete": "off",
            "aria-autocomplete": "list",
            "aria-expanded": shouldShow,
            "aria-owns": this.state.ariaSelectorId,
            "aria-activedescendant": shouldShow ? this.state.ariaSelectorId + "_" + this.state.selectedIndex : undefined,
            "id": this.state.id ? this.state.id : this.getFreeTypingFieldName(),
            "type": "text",
            "name": this.getFreeTypingFieldName(),
            "className": className
        });
        /* Le champ caché contient l'identifiant de l'élément sélectionné. C'est cet identifiant qui est ensuite
         utilisé par les actions. */
        return (React.createElement("div", { className: "autocomplete-container" },
            React.createElement("input", { type: "hidden", name: this.getValueFieldName(), ref: this.registerHiddenInput }),
            React.createElement("input", tslib_1.__assign({}, htmlProps, { ref: this.registerTextInput, readOnly: !this.props.writable, "data-writable": this.props.writable })),
            React.createElement(auto_complete_selector_1.AutoCompleteSelector, { ref: "selector", choices: this.state.choices, onOptionSelected: this.onListWidgetSelected, selectorId: this.state.ariaSelectorId, maxHeight: this.props.maxHeight, showComponent: shouldShow, choicesSelected: this.state.listDefaultValue, autoCompleteState: this.autoCompleteState, disabled: this.state.disabled || this.state.readOnly, noResultLabel: this.state.noResultLabel })));
    };
    /**
     *
     * @param result
     */
    AutoCompleteField.prototype.fetchEventCallback = function (result) {
        this.choicesLoaderCallback(result);
        //dans le cas writable, le composant n'a pas besoin de recharger la liste des choix
        // elle est disponible directement
        if (this.props.writable) {
            if (!this.state.onListWidgetSelected) {
                this.prepareChoices(true);
            }
            else {
                this.prepareChoices(false);
            }
        }
        this.state.onListWidgetSelected = false;
    };
    /**
     * récupération des choix dans le datasource
     * @param result
     */
    AutoCompleteField.prototype.addEventCallback = function (result) {
        this.setResultCallback(result);
    };
    /**
     * récupération des choix dans le datasource
     * @param result
     */
    AutoCompleteField.prototype.setResultCallback = function (result) {
        this.state.allChoices = this.props.dataSource.results;
    };
    /**
     * récupération des choix possibles dans le datasource
     * @param filtered
     */
    AutoCompleteField.prototype.filterEventCallback = function (filtered) {
        this.state.allChoices = filtered;
        this.choicesLoaderCallback(filtered);
    };
    /**
     * récupération des choix à l'initialisation
     * @param result
     */
    AutoCompleteField.prototype.initEventCallback = function (result) {
        this.state.allChoices = result;
    };
    /**
     * retourne le texte saisi
     * @return {any} le texte actuellement saisi dans le champ de saisie libre
     */
    AutoCompleteField.prototype.getCurrentText = function () {
        var text = "";
        if (this.textInput) {
            text = this.textInput.value;
        }
        return text;
    };
    /**
     * Modifie la valeur du texte présent dans l'input
     * @param value texte à mettre dans l'input
     */
    AutoCompleteField.prototype.setCurrentText = function (value) {
        this.textInput.value = value;
    };
    /**
     * Réinitialise le champs autocomplete
     */
    AutoCompleteField.prototype.resetField = function () {
        this.resetSelectedValue();
        this.resetSelectedText();
        this.state.selectedIndex = -1;
        return this;
    };
    /**
     * Réinitialise la valeur de l'élément sélectionné contenu dans le champ caché
     */
    AutoCompleteField.prototype.resetSelectedValue = function () {
        if (this.hiddenInput) {
            this.hiddenInput.value = "";
        }
        this.autoCompleteState.choiceFocused = null;
        this.state.selectedIndex = -1;
    };
    /**
     * Réinitialise la valeur de l'élément sélectionné contenu dans le champ caché
     */
    AutoCompleteField.prototype.resetSelectedText = function () {
        if (this.textInput) {
            this.textInput.value = "";
        }
        if (this.refs.selector) {
            this.refs.selector.setCurrentTypedText("");
        }
    };
    /**
     * Fonction appelée lors d'un appui de touche sur le champ de saisie libre
     * @param e évènement
     * @protected
     */
    AutoCompleteField.prototype.handleOnKeyDown = function (e) {
        /* L'attribut DOM onKeyDown est éventuellement aussi renseigné sur le composant auto-complete */
        if (this.state.onKeyDown) {
            this.state.onKeyDown(event);
        }
        var key = e.keyCode;
        var shouldShow = this.state.shouldShowChoices === true;
        if (key == key_codes_1.KeyCodes.DOWN_ARROW) {
            if (e.altKey) {
                this.autoCompleteState.setFocusOn(this.state.selectedIndex, this.hiddenInput.value, null);
                this.showChoices();
            }
            else {
                this.navigateInChoices(1);
                this.isUpdated = true;
            }
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.UP_ARROW) {
            if (e.altKey) {
                this.hideChoices();
            }
            else {
                this.navigateInChoices(-1);
                this.isUpdated = true;
            }
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.ESCAPE) {
            //test si une valeur existait
            if (this.hiddenInput.value) {
                this.selectedChoice(this.hiddenInput.value);
                this.selectCurrentIndex();
            }
            // On demande le masquage des choix
            this.hideChoices();
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.ENTER) {
            //valide un choix si on est sur un autocomplete simple et writable
            //ne fait rien sinon (valide le formulaire)
            if (this.state.shouldShowChoices && this.state.writable) {
                e.preventDefault();
                this.validateSelectedValue(shouldShow);
            }
        }
        else if (key == key_codes_1.KeyCodes.SPACEBAR && !this.state.writable) {
            //valide un choix si on est sur un autocomplete et non writable
            if (this.state.shouldShowChoices) {
                e.preventDefault();
                this.validateSelectedValue(shouldShow);
            }
        }
        else if (key == key_codes_1.KeyCodes.TAB && !e.shiftKey && this.state.shouldShowChoices) {
            this.tabHandlerForValueChange(e, shouldShow);
        }
        else if (key == key_codes_1.KeyCodes.TAB && e.shiftKey) {
            this.tabHandlerForValueChange(e, shouldShow);
        }
        else if (key == key_codes_1.KeyCodes.HOME) {
            if (shouldShow) {
                this.state.selectedIndex = null;
                this.navigateInChoices(1);
            }
            else {
                this.state.selectedIndex = 0;
                this.selectCurrentIndex();
                this.hideChoices();
            }
            this.isUpdated = true;
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.END) {
            if (shouldShow) {
                this.state.selectedIndex = null;
                this.navigateInChoices(-1);
            }
            else {
                this.state.selectedIndex = this.state.choices.length - 1;
                this.selectCurrentIndex();
                this.hideChoices();
            }
            this.isUpdated = true;
            e.preventDefault();
        }
    };
    /**
     * gère la tabulation
     * @param {__React.KeyboardEvent<HTMLElement>} e
     * @param {boolean} shouldShow
     * @param {boolean} preventDefault
     */
    AutoCompleteField.prototype.tabHandlerForValueChange = function (e, shouldShow) {
        if (this.isUpdated) {
            this.validateSelectedValue(shouldShow);
            this.isUpdated = false;
        }
        else {
            this.selectCurrentIndex();
            this.hideChoices();
        }
    };
    /**
     * valide le choix sélectionné
     * @param shouldShow indique si les résultats doivent être affichés
     */
    AutoCompleteField.prototype.validateSelectedValue = function (shouldShow) {
        var _this = this;
        if (shouldShow) {
            // place le selectedIndex sur le choix
            if (!this.state.selectedIndex) {
                this.state.choices.map(function (element, index) {
                    if (element.text == _this.getCurrentText()) {
                        _this.state.selectedIndex = index;
                    }
                });
            }
            //choix sélectionné
            var selection = (this.state.choices[this.state.selectedIndex] || this.state.allChoices[this.state.selectedIndex]);
            if (selection != null) {
                this.setCurrentValue(selection.value);
                this.props.dataSource.select(selection);
            }
            else {
                this.setCurrentValue(undefined);
                this.props.dataSource.select(undefined);
            }
            this.selectCurrentIndex();
            this.hideChoices();
        }
        else {
            this.showChoices();
        }
    };
    /**
     * Gestion de l'évènement onFocus pour le champ de saisie libre.
     * @param event
     */
    AutoCompleteField.prototype.handleOnFocus = function (event) {
        var _this = this;
        this.typedValueOnFocus = this.getCurrentText();
        this.state.focused = true;
        this.showChoices();
        /* L'attribut DOM onBlur est éventuellement aussi renseigné sur le composant auto-complete */
        if (this.state.onFocus) {
            this.state.onFocus(event);
        }
        if (this.state.allChoices) {
            if (this.isValidText(this.typedValueOnFocus) || !this.props.writable) {
                logger.trace("auto-complete : prise en compte du texte présent au focus : ", this.typedValueOnFocus);
                if (!this.props.dataSource.status) {
                    this.props.dataSource.init();
                }
                else {
                    if ((!this.props.writable) || this.state.choices.length == 0 && this.hiddenInput.value) {
                        this.setChoices(this.state.allChoices, function () {
                            if (_this.state.allChoices.length > 0) {
                                var index = _.findIndex(_this.state.allChoices, { text: _this.typedValueOnFocus });
                                _this.state.selectedIndex = index === undefined ? -1 : index;
                                _this.showChoices();
                                _this.changeSelectedChoiceWhenOneChoice(_this.typedValueOnFocus);
                            }
                        });
                    }
                }
                //this._throttledTriggerAction(this.typedValueOnFocus);
                this.changeSelectedChoiceWhenOneChoice(this.typedValueOnFocus);
            }
            else {
                this.setChoices(this.state.allChoices, function () {
                    if (_this.state.allChoices.length > 0) {
                        _this.showChoices();
                        _this.state.selectedIndex = -1;
                        _this.autoCompleteState.setFocusOn(_this.state.selectedIndex, "", null);
                    }
                });
            }
        }
        else {
            this.showChoices();
        }
        if (!this.hiddenInput || this.hiddenInput.value.length == 0 || !this.textInput || this.textInput.value.length == 0) {
            this.clearFilterData();
            this.state.selectedIndex = -1;
            this.autoCompleteState.setFocusOn(this.state.selectedIndex, "", null);
        }
        else {
            this.state.selectedIndex = _.findIndex(this.state.allChoices, { text: this.typedValueOnFocus });
            this.autoCompleteState.setFocusOn(this.state.selectedIndex, this.hiddenInput.value, null);
        }
    };
    /**
     * Fonction déclenchée lorsque le champ de saisie libre perd le focus
     * @param event
     */
    AutoCompleteField.prototype.handleOnBlur = function (event) {
        this.state.focused = false;
        /* L'attribut DOM onBlur est éventuellement aussi renseigné sur ce composant auto-complete */
        if (this.state.onBlur) {
            this.state.onBlur(event);
        }
        var currentText = this.getCurrentText();
        if (this.state.allChoices) {
            this.state.allChoices.filter(function (choice) {
                var res = false;
                if (!choice.text) {
                    res = choice.text.toLowerCase() === currentText.toLowerCase();
                }
                return res;
            });
        }
        if (!this.props.dataSource.selected || (this.props.dataSource.selected &&
            this.props.dataSource.selected.value &&
            this.props.dataSource.selected.value.toString() !== this.hiddenInput.value)) {
            if (!this.hiddenInput || !this.hiddenInput.value || this.hiddenInput.value.length == 0) {
                this.clearFilterData();
                if (!this.state.isShiftTab)
                    this.props.dataSource.select(undefined);
            }
            else {
                this.props.dataSource.select(_.find(this.state.allChoices, { value: this.hiddenInput.value }));
            }
        }
        this.hideChoices();
        this.isUpdated = false;
    };
    /**
     * indique aux élément esclave qu'un filter a été fait sur le maitre si le datasource en est un
     */
    AutoCompleteField.prototype.clearFilterData = function () {
        if (this.props.dataSource instanceof datasource_master_1.DataSourceMaster) {
            this.props.dataSource.getSlaves().forEach(function (item) {
                item.emit("filter", []);
            });
        }
    };
    /**
     * Fonction déclenchée sur une modification du champ de saisie libre
     * @param event
     */
    AutoCompleteField.prototype.handleChangeTextInput = function (event) {
        var _this = this;
        logger.trace("auto-complete handleChangeTextInput");
        /* Le texte a changé donc on réinitialise la valeur */
        this.resetSelectedValue();
        this.state.selectedIndex = null;
        /* L'attribut DOM onChange est éventuellement aussi renseigné sur le composant auto-complete */
        if (this.state.onChange) {
            this.state.onChange(event);
        }
        var newText = this.getCurrentText();
        this.clearFilterData();
        this.isUpdated = true;
        if (this.refs.selector) {
            this.refs.selector.setCurrentTypedText(newText);
        }
        if (this.isValidText(newText)) {
            logger.trace("auto-complete : prise en compte du texte saisi : ", newText);
            this._throttledTriggerAction(newText);
        }
        else {
            this.hideChoices();
        }
        if (newText.length == 0) {
            this.setChoices(this.state.allChoices, function () {
                if (_this.state.allChoices.length > 0) {
                    _this.showChoices();
                }
                else {
                    _this.props.dataSource.select(null);
                }
            });
        }
    };
    /**
     * si il n'y a plus qu'un choix écrit dans sa totalité,
     * valid ele choix
     * @param {string} newText
     */
    AutoCompleteField.prototype.changeSelectedChoiceWhenOneChoice = function (newText) {
        if (this.state.choices && this.state.choices[0] && this.state.choices.length === 1
            && _.deburr(newText).toLowerCase() == _.deburr(this.state.choices[0].text).toLowerCase()) {
            this.changeSelectedChoice(this.state.choices[0]);
            this.props.dataSource.select(this.state.choices[0]);
            this.autoCompleteState.setFocusOn(0, this.state.choices[0].value, 0);
        }
    };
    /**
     * change la valeur courrante
     * @param value
     * @returns {this}
     */
    AutoCompleteField.prototype.setCurrentValue = function (value) {
        _super.prototype.setCurrentValue.call(this, value);
        this.setState({ listDefaultValue: value });
        return this;
    };
    /**
     * Déclenche le chargement des éléments correspondant au texte saisi
     * @param newText texte saisi
     */
    AutoCompleteField.prototype.triggerAction = function (newText) {
        this.setIsApiLoading(true);
        this.props.dataSource.fetch(true, newText, true);
    };
    /**
     * Controle la longeur du text saisie avant de déclancher la recherche
     * @param cnt : boolean
     */
    AutoCompleteField.prototype.isMaxElementNumberReached = function (cnt) {
        return this.state.maxElements && cnt >= this.state.maxElements;
    };
    /**
     * Charge la liste de choix dans le composant
     */
    AutoCompleteField.prototype.prepareChoices = function (display) {
        var _this = this;
        if (display === void 0) { display = true; }
        var newChoices = [];
        var cnt = 0;
        if (this.state.choices) {
            this.state.choices.map(function (choice) {
                if (_this.findText(choice, _this.getCurrentText().toLowerCase()) && !_this.isMaxElementNumberReached(cnt)) {
                    newChoices.push(choice);
                    cnt++;
                }
            });
        }
        // mets a jour la liste des choix
        this.setChoices(newChoices, function () {
            if (newChoices.length > 0 && display) {
                //si il n'y a plus qu'un choix on le valide
                _this.changeSelectedChoiceWhenOneChoice(_this.getCurrentText());
                _this.showChoices();
            }
            else {
                _this.hiddenInput.value = "";
                _this.props.dataSource.select(null);
                _this.showChoices();
            }
        });
    };
    /**
     * Fonction déclenchée une fois les éléments de choix obtenus par la fonction choicesLoader
     * @param resultItems éléments obtenus. ceux-ci doivent contenir une propr
     */
    AutoCompleteField.prototype.choicesLoaderCallback = function (resultItems) {
        this.setIsApiLoading(false);
        this.setChoices(resultItems);
    };
    /**
     * test si le choix choice commence par current
     * @param choice
     * @param current
     * @returns {boolean}
     */
    AutoCompleteField.prototype.startsWithText = function (choice, current) {
        var choiceText = choice ? choice["text"] ? choice["text"].toLowerCase() : null : null;
        return _.startsWith(choiceText, current);
    };
    /**
     * teste si le texte current est contenu dans le choix choice
     * @param choice
     * @param current
     * @returns {boolean}
     */
    AutoCompleteField.prototype.indexOfText = function (choice, current) {
        var choiceText = choice ? choice["text"] ? choice["text"].toLowerCase() : null : null;
        if (choiceText && (choiceText.indexOf(current) >= 0)) {
            return true;
        }
        return false;
    };
    /**
     * indique si le texte current se trouve dans le choix
     * @param choice
     * @param current
     * @returns {boolean}
     */
    AutoCompleteField.prototype.findText = function (choice, current) {
        if (typeof this.props.filterText == "function") {
            return this.props.filterText(choice, current);
        }
        else if (this.props.filterText == FilterTextType.beginWith) {
            return this.startsWithText(choice, current);
        }
        else if (this.props.filterText == FilterTextType.indexOf) {
            return this.indexOfText(choice, current);
        }
        return false;
    };
    /**
     * Fonction appelée lorsque l'utilisateur a choisi un élément de la liste de choix.
     * @param choice élément sélectionné
     */
    AutoCompleteField.prototype.changeSelectedChoice = function (choice) {
        if (this.refs.selector) {
            this.refs.selector.setCurrentTypedText("");
        }
        this.textInput.value = choice ? choice.text : "";
        this.hiddenInput.value = choice ? choice.value : "";
    };
    /**
     * Recupere l'index de l'element selectionné
     * @param choice
     */
    AutoCompleteField.prototype.selectedChoice = function (choice) {
        var indexSelected = null;
        if (this.state.choices) {
            this.state.choices.map(function (item, index) {
                if (item.value == choice) {
                    indexSelected = index;
                }
            });
            this.setCurrentValue(choice);
        }
    };
    /**
     * Fonction appelée lorsque l'utilisateur clique sur un item de la liste des valeurs possibles
     * @param event
     */
    AutoCompleteField.prototype.onListWidgetSelected = function (event, choice) {
        if (choice) {
            logger.trace("Selection click [", choice.value, "]:", choice.text);
            var index = _.findIndex(this.state.choices, choice);
            this.state.selectedIndex = index;
            this.autoCompleteState.choiceFocused = index;
            this.changeSelectedChoice(choice);
            this.hiddenInput.value = choice.value;
            this.selectedChoice(choice.value);
            this.props.dataSource.select(choice);
        }
        this.state.onListWidgetSelected = true;
        this.hideChoices();
    };
    /**
     * Retourne true si le texte indiqué correspond aux critères de taille minimale
     * @param text
     * @returns {boolean}
     * @protected
     */
    AutoCompleteField.prototype.isValidText = function (text) {
        return (text != null && text.length >= this.state.minValueLength);
    };
    /**
     * Navigue au sein de la liste de choix
     * @param delta {number} indique de combien d'éléments on doit se déplacer par rapport à l'élément actuellement sélectionné
     * @protected
     */
    AutoCompleteField.prototype.navigateInChoices = function (delta) {
        var _this = this;
        var newIndex = this.state.selectedIndex === null ? (delta === 1 ? 0 : delta) : this.state.selectedIndex + delta;
        var choicesLength = this.state.choices ? this.state.choices.length : 0;
        if (newIndex < 0) {
            //On va à la fin
            newIndex = choicesLength - 1;
        }
        else if (newIndex >= choicesLength) {
            //On retourne au début
            newIndex = 0;
        }
        // on valide le choix sur lequel on est
        this.setState({ selectedIndex: newIndex }, function () {
            _this.selectCurrentIndex();
            if (!_this.state.shouldShowChoices) {
                var selection = (_this.state.choices[_this.state.selectedIndex]);
                if (selection != null) {
                    _this.changeSelectedChoice(selection);
                    _this.setCurrentValue(selection.value);
                }
            }
            _this.autoCompleteState.setFocusOn(_this.state.selectedIndex, _this.hiddenInput.value, newIndex);
        });
        // On s'assure de l'affichage de la liste déroulante
        if (this.state.shouldShowChoices) {
            this.showChoices();
        }
    };
    /**
     * Selectionne l'élement actuellement en surbrillance dans la liste de choix
     * @return boolean si une sélection a effectivement eu lieu
     * @protected
     */
    AutoCompleteField.prototype.selectCurrentIndex = function () {
        var selection = (this.state.choices || [])[this.state.selectedIndex];
        if (selection != null) {
            this.changeSelectedChoice(selection);
            return true;
        }
        return false;
    };
    /**
     * Demande l'affichage du composant de choix
     * @public
     */
    AutoCompleteField.prototype.showChoices = function () {
        if (this.state.shouldShowChoices !== true && this.state.focused) {
            if (this.isValidText(this.textInput.value) || this.textInput.value.length == 0 || !this.props.writable) {
                this.setState({ shouldShowChoices: true });
            }
        }
    };
    /**
     * Demande le masquage du composant de choix
     * @public
     */
    AutoCompleteField.prototype.hideChoices = function () {
        if (this.state.shouldShowChoices !== false) {
            this.setState({ shouldShowChoices: false });
        }
    };
    /**
     * @return {boolean} true si le composant de liste doit s'afficher
     * @protected
     */
    AutoCompleteField.prototype.shouldShowChoices = function () {
        return this.state.shouldShowChoices === true;
    };
    /**
     * @return {string} le nom du champ caché contenant la valeur
     */
    AutoCompleteField.prototype.getValueFieldName = function () {
        return this.state.name + "." + this.state.valueKey;
    };
    /**
     * @return {string} le nom du champ de saisie libre
     */
    AutoCompleteField.prototype.getFreeTypingFieldName = function () {
        return this.state.name + "." + this.state.labelKey;
    };
    /**
     * Surcharge le rendu des erreurs de validation : le nom du champ à mettre en évidence est le champ de saisie libre
     * @override
     */
    AutoCompleteField.prototype.renderErrors = function () {
        var fieldErrorProps = {
            errors: this.state.errors,
            fieldName: this.getFreeTypingFieldName()
        };
        var basicFieldErrorProps = {
            errors: this.state.errors,
            fieldName: this.state.name
        };
        var Error = this.state.errorComponent;
        return (React.createElement("div", null,
            React.createElement(Error, tslib_1.__assign({}, fieldErrorProps)),
            React.createElement(Error, tslib_1.__assign({}, basicFieldErrorProps))));
    };
    /**
     * On enregistre également le champ contenant la valeur dans la classe parente DomAdapter, ce qui fait les liens
     entre le formulaire, le champ HTML et le composant React.
     * @param hiddenInput
     */
    AutoCompleteField.prototype.registerHiddenInput = function (hiddenInput) {
        this.hiddenInput = hiddenInput;
        this.registerHtmlElement(hiddenInput);
    };
    /**
     *  Conserve la valeur du champs saisie
     * @param textInput
     */
    AutoCompleteField.prototype.registerTextInput = function (textInput) {
        this.textInput = textInput;
    };
    /** on mets le focus sur l'input */
    AutoCompleteField.prototype.setFocus = function () {
        this.state.focused = true;
        this.textInput.focus();
        return this;
    };
    /**
     * teste si le composant a des erreurs
     * @override
     */
    AutoCompleteField.prototype.hasErrors = function () {
        var fieldErrors = null;
        if (this.state.errors) {
            fieldErrors = this.state.errors.filter(function (error) {
                var name = this.state.name + "." + this.state.labelKey;
                return (error.field == name || error.field == this.state.name);
            }, this);
        }
        if (fieldErrors && (fieldErrors.length > 0)) {
            return true;
        }
        return false;
    };
    AutoCompleteField.defaultProps = _.assign({
        minValueLength: 1,
        readOnly: false,
        disabled: false,
        delay: 1000,
        valueKey: "value",
        labelKey: "text",
        maxHeight: null,
        writable: true,
        filterText: FilterTextType.indexOf
    }, abstract_field_1.AbstractField.defaultProps);
    return AutoCompleteField;
}(abstract_field_datasource_1.AbstractFieldDatasource));
exports.AutoCompleteField = AutoCompleteField;



/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var classNames = __webpack_require__(9);
var _ = __webpack_require__(6);
var hornet_component_1 = __webpack_require__(3);
var checkbox_1 = __webpack_require__(284);
var auto_complete_state_1 = __webpack_require__(314);
var React = __webpack_require__(2);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.auto-complete-selector");
/**
 * Liste de choix de l'auto completion
 */
var AutoCompleteSelector = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteSelector, _super);
    function AutoCompleteSelector(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.noResultLabelDefault = AutoCompleteSelector.getI18n("form.autoCompleteField.noResultLabel");
        _this.state.maxLengthItem = 0;
        _this.props.autoCompleteState.on(auto_complete_state_1.AutoCompleteState.FOCUS_CHANGE_EVENT, _this.handleFocus);
        _this.liElts = [];
        _this.liReact = [];
        _this.choicesSelected = [];
        return _this;
    }
    AutoCompleteSelector.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        _super.prototype.componentWillUpdate.call(this, nextProps, nextState, nextContext);
        return true;
    };
    // Setters
    AutoCompleteSelector.prototype.setChoices = function (value, callback) {
        this.setState({ choices: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setOnOptionSelected = function (value, callback) {
        this.setState({ onOptionSelected: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setCurrentTypedText = function (currentTypedText, callback) {
        this.setState({ currentTypedText: currentTypedText }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setCurrentIndex = function (value, callback) {
        this.setState({ currentIndex: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setSelectorId = function (value, callback) {
        this.setState({ selectorId: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setShowComponent = function (value, callback) {
        this.setState({ showComponent: value }, callback);
        return this;
    };
    /**
     * Fonction appelée lors du click sur un élément de la liste
     **/
    AutoCompleteSelector.prototype.onListClick = function (event, choice) {
        event.preventDefault();
        this.state.onListClick = true;
        return this.state.onOptionSelected(event, choice);
    };
    AutoCompleteSelector.prototype.onListClickMulti = function (event, index, choice) {
        event.stopPropagation();
        event.preventDefault();
        if (event.button == 0) {
            this.state.onListClick = true;
            return this.state.onOptionSelected(event, choice);
        }
    };
    /**
     * Fonction appelée pour scroller de un item vers le bas
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollDown = function (element, checkedElement) {
        element.scrollTop += ((checkedElement.offsetTop + checkedElement.offsetHeight) - ((element.scrollTop ? element.scrollTop : 5) + element.offsetHeight)) + 5;
    };
    /**
     * Fonction appelée pour scroller de un item vers le haut
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollUp = function (element, checkedElement) {
        element.scrollTop -= (((element.scrollTop ? element.scrollTop : 5) - checkedElement.offsetTop + 5));
    };
    /**
     * Fonction appelée pour scroller au début de la liste
     * @param {HTMLElement} element la liste déroulante
     **/
    AutoCompleteSelector.prototype.scrollToBegin = function (element) {
        element.scrollTop = 0;
    };
    /**
     * Fonction appelée pour scroller à la toute fin de la liste
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollToEnd = function (element, checkedElement) {
        element.scrollTop = element.offsetHeight - checkedElement.offsetHeight;
    };
    /**
     * Fonction appelée tester si la position de l'élément est en amont dans la liste
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.isBefore = function (element, checkedElement) {
        return (checkedElement.offsetTop < (element.scrollTop ? element.scrollTop : 5));
    };
    /**
     * Fonction appelée tester si la position de l'élément est en aval dans la liste
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.isAfter = function (element, checkedElement) {
        return (checkedElement.offsetTop + checkedElement.offsetHeight >= (element.scrollTop ? element.scrollTop : 5) + element.offsetHeight);
    };
    /**
     * Fonction appelée la taille  de l'écart
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.hasBigGap = function (element, checkedElement) {
        return Math.abs(checkedElement.offsetTop - (element.scrollTop ? element.scrollTop : 5)) > element.offsetHeight;
    };
    /**
     * Fonction appelée pour position la liste directement sur l'élément
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.goToElement = function (element, checkedElement) {
        element.scrollTop = checkedElement.offsetTop - 5;
    };
    /**
     * Fonction appelée pour scroller vers un élément
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollToElement = function (checkedElement) {
        var element = document.getElementById(this.state.selectorId);
        if (this.isBefore(element, checkedElement)) {
            if (this.hasBigGap(element, checkedElement)) {
                this.goToElement(element, checkedElement);
            }
            else {
                this.scrollUp(element, checkedElement);
            }
        }
        else if (this.isAfter(element, checkedElement)) {
            if (this.hasBigGap(element, checkedElement)) {
                this.goToElement(element, checkedElement);
            }
            else {
                this.scrollDown(element, checkedElement);
            }
        }
        this.setActive(checkedElement);
    };
    /**
     * Fonction appelée pour déselectionner
     **/
    AutoCompleteSelector.prototype.cleanActived = function () {
        var lastCheckedElement = document.querySelectorAll("#" + _.replace(this.state.selectorId, ".", "\\.") + " .autocomplete-item-active");
        if (lastCheckedElement) {
            _.forEach(lastCheckedElement, function (item) {
                item.className = "autocomplete-item";
            });
        }
    };
    /**
     * Fonction appelée pour activer un item
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.setActive = function (checkedElement) {
        this.cleanActived();
        if (checkedElement) {
            checkedElement.focus();
            checkedElement.className = "autocomplete-item autocomplete-item-active";
        }
    };
    /**
     * Fonction appelée pour scroller vers un élément par son id
     * @param {string} id l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollToElementById = function (id) {
        var checkedElement = document.getElementById(id);
        this.scrollToElement(checkedElement);
    };
    /**
     * Lorsque l'element selectionné change, on scroll vers celui-ci
     */
    AutoCompleteSelector.prototype.componentDidUpdate = function () {
        this.cleanActived();
        var element = document.getElementById(this.state.selectorId);
        if (!this.state.onListClick) {
            if (this.state.autoCompleteState.choiceFocused !== undefined) {
                var idToScroll = this.state.selectorId + "_" + this.state.autoCompleteState.choiceFocused;
                var checkedElement = document.getElementById(idToScroll);
                this.setActive(checkedElement);
                if (checkedElement) {
                    checkedElement.className = "autocomplete-item autocomplete-item-active";
                    this.scrollToElement(checkedElement);
                }
            }
            else {
                element.scrollTop = 5;
            }
        }
        this.state.onListClick = false;
    };
    /**
     * Retourne le rendu de la liste de choix
     **/
    AutoCompleteSelector.prototype.renderOptionList = function () {
        var _this = this;
        logger.trace("render AutoCompleteSelector option list");
        var res = [];
        if (this.state.choices) {
            this.state.choices.forEach(function (choice, indexTab) {
                if (choice) {
                    var choiceTextFormatted = _.deburr(choice.text).toLowerCase();
                    var currentTextFormatted = _.deburr(_this.state.currentTypedText).toLowerCase();
                    var index = choiceTextFormatted.indexOf(currentTextFormatted);
                    if (index === -1) {
                        if (currentTextFormatted != "") {
                            return null;
                        }
                        else {
                            index = 0;
                        } // Valeur saisie non présente
                    }
                    var classes = {
                        "autocomplete-item": true,
                    };
                    var classList = classNames(classes);
                    var checkboxChecked = false;
                    res.push((React.createElement("li", { onMouseDown: !_this.props.readOnly && !_this.props.disabled ? function (event) { return _this.onListClick(event, choice); } : null, id: _this.state.selectorId + "_" + indexTab, className: classList, "aria-selected": _this.state.choicesSelected == choice.value, "data-real-value": choice.value, role: "option", key: "autocomplete-" + choice.text + "-" + choice.value, ref: function (liElt) {
                            if (liElt != null)
                                _this.liElts.push(liElt);
                        } },
                        choice.text ? choice.text.substring(0, index) : "",
                        React.createElement("b", null, _this.state.currentTypedText),
                        choice.text ? choice.text.substring(index + _this.state.currentTypedText.length) : "")));
                }
            });
        }
        return res;
    };
    /**
     * indique un clic sur une checkbox
     **/
    AutoCompleteSelector.prototype.multiClick = function (event) {
        this.state.onListClick = true;
    };
    /**
     * Retourne le rendu de la liste de choix
     **/
    AutoCompleteSelector.prototype.renderOptionMultipleList = function () {
        var _this = this;
        logger.trace("render AutoCompleteSelector option multiple");
        var res = [];
        if (this.state.choices) {
            this.state.choices.forEach(function (choice, indexTab) {
                if (choice) {
                    var choiceTextFormatted = _.deburr(choice.text).toLowerCase();
                    var currentTextFormatted = _.deburr(_this.state.currentTypedText).toLowerCase();
                    var index = choiceTextFormatted.indexOf(currentTextFormatted);
                    if (index === -1)
                        return null; // Valeur saisie non présente
                    var classes = {
                        "autocomplete-item": true,
                        "autocomplete-item-active": _this.props.autoCompleteState.choiceFocused === indexTab
                    };
                    var checkboxChecked = false;
                    if (_.indexOf(_this.props.choicesSelected, choice.value.toString()) > -1) {
                        checkboxChecked = true;
                    }
                    var classList = classNames(classes);
                    res.push((React.createElement("li", { onMouseDown: !_this.props.readOnly && !_this.props.disabled ? function (e) { _this.onListClickMulti(e, indexTab, choice); } : null, id: _this.state.selectorId + "_" + indexTab, onKeyDown: !_this.props.readOnly && !_this.props.disabled ? function (e) {
                            _this.onListClickMulti(e, indexTab, choice);
                        } : null, className: classList, "data-real-value": choice.value, role: "option", "aria-selected": checkboxChecked, key: "autocomplete-" + choice.text + "-" + choice.value, ref: function (liElt) {
                            if (liElt != null)
                                _this.liElts.push(liElt);
                        } },
                        React.createElement(checkbox_1.CheckBox, { id: "autocomplete-selector-checkbox-" + indexTab, key: "autocomplete-selector-checkbox-" + indexTab + "-" + checkboxChecked, checked: checkboxChecked, label: choice.text, onChange: function () { }, readOnly: _this.props.readOnly, disabled: _this.props.disabled }))));
                }
            });
        }
        return res;
    };
    /**
     * @inheritDoc
     */
    AutoCompleteSelector.prototype.render = function () {
        logger.trace("render AutoCompleteSelector");
        this.liElts = [];
        this.liReact = (this.props.isMultiple) ? this.renderOptionMultipleList() : this.renderOptionList();
        // On construit le ul englobant
        var classes = {
            "autocomplete-selector": true,
            "widget-positioned": true,
            "autocomplete-selector-hidden": this.state.showComponent === false
        };
        var classList = classNames(classes);
        var styleUl = {
            "minWidth": "100%",
            "maxHeight": this.props.maxHeight ? this.props.maxHeight + "px" : "none"
        };
        if (this.props.maxHeight) {
            styleUl.overflow = "auto";
        }
        var classesContent = {
            "autocomplete-content-selector": true
        };
        var no_result = (React.createElement("div", { style: { fontStyle: "italic" } }, this.state.noResultLabel ? this.state.noResultLabel : this.noResultLabelDefault));
        var classContentList = classNames(classesContent);
        return (React.createElement("div", { className: classList },
            React.createElement("div", { className: classContentList },
                React.createElement("ul", { className: "autocomplete-selector-list", role: "listbox", id: this.state.selectorId, style: styleUl, "aria-multiselectable": this.props.isMultiple }, this.liReact.length > 0 ? this.liReact : no_result))));
    };
    /**
     * Fonction appelée pour scroller vers un élément
     * @param {number} oldChoiceFocused l'ancien indice de l'élément sélectionné
     * @param {number} newChoiceFocused l'indice de l'élément sélectionné
     * @param {string} value l'élément sélectionné
     * @param {number} index l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.handleFocus = function (oldChoiceFocused, newChoiceFocused, value, index) {
        if (value && value.length > 0) {
            var elmt = document.querySelector("#" + _.replace(this.state.selectorId, ".", "\\.") + " [data-real-value='" + value + "']");
            if (elmt) {
                this.scrollToElement(elmt);
                var _index = _.findIndex(this.liElts, elmt);
                this.state.autoCompleteState.choiceFocused = _index;
                this.setFocusElement(elmt);
            }
        }
        else {
            if (newChoiceFocused !== undefined && newChoiceFocused != null && newChoiceFocused >= 0 && this.liElts.length > 0) {
                var elmt = this.liElts[newChoiceFocused];
                if (elmt && this.props.isMultiple) {
                    this.setFocusElement(elmt);
                }
                else {
                    if (elmt && (elmt.getAttribute("data-real-value") === value)) {
                        this.setFocusElement(elmt);
                    }
                }
            }
            else {
                this.scrollToBegin(document.getElementById(this.state.selectorId));
            }
        }
    };
    /**
     * Fonction appelée pour focus un item
     * @param {HTMLElement} elmt l'élément sélectionné à focus
     **/
    AutoCompleteSelector.prototype.setFocusElement = function (elmt) {
        this.scrollToElement(elmt);
    };
    AutoCompleteSelector.defaultProps = {
        onOptionSelected: function (event, choice) {
            event.preventDefault();
        },
        currentTypedText: "",
        showComponent: true,
        choices: [],
        readOnly: false,
        disabled: false
    };
    return AutoCompleteSelector;
}(hornet_component_1.HornetComponent));
exports.AutoCompleteSelector = AutoCompleteSelector;



/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var datasource_1 = __webpack_require__(306);
var _ = __webpack_require__(6);
/*
* @classdesc Classe représentant les datasources de type MASTER-SLAVE
* @class
*/
var DataSourceMaster = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceMaster, _super);
    function DataSourceMaster(config, keysMap, options) {
        var _this = _super.call(this, config, keysMap, options) || this;
        _this.keysMap = keysMap;
        _this.options = options;
        _this._datasources = [];
        return _this;
    }
    /***
     * Ajout d'un datasource slave
     * @param datasource esclave du master
     * @return une promise du result modifié
     */
    DataSourceMaster.prototype.addSlave = function (datasource) {
        this._datasources.push(datasource);
    };
    /***
     * retirer un datasource slave
     * @param datasource esclave du master
     */
    DataSourceMaster.prototype.removeDatasource = function (datasource) {
        _.remove(this._datasources, datasource);
    };
    /***
     * Retourne les datasources slaves du master
     * @return slaves
     */
    DataSourceMaster.prototype.getSlaves = function () {
        return this._datasources;
    };
    /***
     * Permet de selectionner un element ou des elements du datasource et de déclencher le fetch sur les slaves.
     * déclenche un evènement "select", si le datasource est de type Service un event fetch est lancé lorsque les données arrivées
     * @param args correspond aux éléments à envoyer au fetch des datasources esclaves.
     * @void
     */
    DataSourceMaster.prototype.select = function (args) {
        _super.prototype.select.call(this, args);
        if (this._datasources.length > 0) {
            var isArrayDS_1 = this.isDataSourceArray;
            _.map(this._datasources, function (item) {
                item.fetch(isArrayDS_1 ? false : true, args);
            });
        }
    };
    return DataSourceMaster;
}(datasource_1.DataSource));
exports.DataSourceMaster = DataSourceMaster;



/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var sort_data_1 = __webpack_require__(285);
var technical_error_1 = __webpack_require__(13);
var codes_error_1 = __webpack_require__(98);
var hornet_js_utils_1 = __webpack_require__(0);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-core.component.datasource.options.datasource-option");
var CompareMethod;
(function (CompareMethod) {
    CompareMethod[CompareMethod["COMPARE_DEFAULT"] = 1] = "COMPARE_DEFAULT";
    CompareMethod[CompareMethod["COMPARE_WITH_LOWERCASE"] = 2] = "COMPARE_WITH_LOWERCASE";
    CompareMethod[CompareMethod["COMPARE_WITH_UPPERCASE"] = 3] = "COMPARE_WITH_UPPERCASE";
})(CompareMethod = exports.CompareMethod || (exports.CompareMethod = {}));
/**
 * Option de tri par defaut dans un datasourcede
 */
var DefaultSort = /** @class */ (function () {
    /***
     * @param {SortData[]} sort  données de tri
     * @param {(a: any, b: any) => number} Fonction de comparaison (optionnel).
     * @param {boolean} sendFetch définit si l'option doit être envoyée au fetch ou pas.
     *
     */
    function DefaultSort(sort, initCompare, sendFetch) {
        if (initCompare === void 0) { initCompare = CompareMethod.COMPARE_DEFAULT; }
        if (sendFetch === void 0) { sendFetch = false; }
        this.sort = sort;
        this.initCompare = initCompare;
        this.sendFetch = sendFetch;
        this.compare = function (sort, a, b) {
            if (arguments.length < 3) {
                var msg = "3 arguments sont necessaires [sortData, a, b]";
                logger.error(msg);
                throw new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_SORT_ARGS_ERROR, { errorMessage: codes_error_1.CodesError.DEFAULT_ERROR_MSG }, null);
            }
            if (this.initCompare && typeof this.initCompare == "function") {
                return this.initCompare(a, b);
            }
            else {
                var sortDatas = sort ? sort : (this.sort && this.sort.length > 0) ? this.sort : [];
                var result_1;
                sortDatas.every(function (sortData) {
                    var aValue = a[sortData["key"]];
                    var bValue = b[sortData["key"]];
                    if (aValue < bValue) {
                        result_1 = (sortData.dir == sort_data_1.SortDirection.ASC) ? -1 : 1;
                        return false;
                    }
                    if (aValue == bValue) {
                        return true;
                    }
                    if (aValue > bValue) {
                        result_1 = (sortData.dir == sort_data_1.SortDirection.ASC) ? 1 : -1;
                        return false;
                    }
                });
                return result_1;
            }
        };
        this.compareUpperCase = function (sort, a, b) {
            if (arguments.length < 3) {
                var msg = "3 arguments sont necessaires [sortData, a, b]";
                logger.error(msg);
                throw new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_SORT_ARGS_ERROR, { errorMessage: codes_error_1.CodesError.DEFAULT_ERROR_MSG }, null);
            }
            var sortDatas = sort ? sort : (this.sort && this.sort.length > 0) ? this.sort : [];
            var result;
            sortDatas.every(function (sortData) {
                var aValue = a[sortData["key"]];
                var bValue = b[sortData["key"]];
                aValue = (typeof a[sortData["key"]] == "string") ? a[sortData["key"]].toUpperCase() : (typeof a[sortData["key"]] == "undefined") ? "" : a[sortData["key"]];
                bValue = (typeof b[sortData["key"]] == "string") ? b[sortData["key"]].toUpperCase() : (typeof b[sortData["key"]] == "undefined") ? "" : b[sortData["key"]];
                if (aValue < bValue) {
                    result = (sortData.dir == sort_data_1.SortDirection.ASC) ? -1 : 1;
                    return false;
                }
                if (aValue == bValue) {
                    return true;
                }
                if (aValue > bValue) {
                    result = (sortData.dir == sort_data_1.SortDirection.ASC) ? 1 : -1;
                    return false;
                }
            });
            return result;
        };
        this.compareLowerCase = function (sort, a, b) {
            if (arguments.length < 3) {
                var msg = "3 arguments sont necessaires [sortData, a, b]";
                logger.error(msg);
                throw new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_SORT_ARGS_ERROR, { errorMessage: codes_error_1.CodesError.DEFAULT_ERROR_MSG }, null);
            }
            var sortDatas = sort ? sort : (this.sort && this.sort.length > 0) ? this.sort : [];
            var result;
            sortDatas.every(function (sortData) {
                var aValue = a[sortData["key"]];
                var bValue = b[sortData["key"]];
                aValue = (typeof a[sortData["key"]] == "string") ? a[sortData["key"]].toLowerCase() : (typeof a[sortData["key"]] == "undefined") ? "" : a[sortData["key"]];
                bValue = (typeof b[sortData["key"]] == "string") ? b[sortData["key"]].toLowerCase() : (typeof b[sortData["key"]] == "undefined") ? "" : b[sortData["key"]];
                if (aValue < bValue) {
                    result = (sortData.dir == sort_data_1.SortDirection.ASC) ? -1 : 1;
                    return false;
                }
                if (aValue == bValue) {
                    return true;
                }
                if (aValue > bValue) {
                    result = (sortData.dir == sort_data_1.SortDirection.ASC) ? 1 : -1;
                    return false;
                }
            });
            return result;
        };
    }
    /**
     * définit si l'option doit être envoyée au fetch ou pas
     * @returns {boolean}
     */
    DefaultSort.prototype.sendToFetch = function () {
        return this.sendFetch;
    };
    DefaultSort.prototype.getCompareFunction = function (number) {
        switch (number) {
            case CompareMethod.COMPARE_WITH_LOWERCASE:
                return this.compareLowerCase;
            case CompareMethod.COMPARE_WITH_UPPERCASE:
                return this.compareUpperCase;
            default:
                return this.compare;
        }
    };
    return DefaultSort;
}());
exports.DefaultSort = DefaultSort;
var SpinnerOption = /** @class */ (function () {
    /**
     * @param {SpinnerType} type : type de spinner
     * @param {boolean} sendFetch définit si l'option doit être envoyée au fetch ou pas.
     */
    function SpinnerOption(type, sendFetch) {
        this.type = type;
        this.sendFetch = sendFetch;
    }
    /**
     * définit si l'option doit etre envoyée au fetch ou pas
     * @returns {boolean}
     */
    SpinnerOption.prototype.sendToFetch = function () {
        return false;
    };
    return SpinnerOption;
}());
exports.SpinnerOption = SpinnerOption;
/**
 * Mode d'initialisation de l'init dans un datasource
 */
var InitAsync = /** @class */ (function () {
    /**
     * @param {boolean} isAsync : type d'initialisation
     * @param {boolean} sendFetch définit si l'option doit être envoyée au fetch ou pas.
     */
    function InitAsync(isAsync, sendFetch) {
        this.isAsync = isAsync;
        this.sendFetch = sendFetch;
    }
    /**
     * définit si l'option doit etre envoyée au fetch ou pas
     * @returns {boolean}
     */
    InitAsync.prototype.sendToFetch = function () {
        return false;
    };
    return InitAsync;
}());
exports.InitAsync = InitAsync;



/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/***
 * @classdesc Classe configuration pour les datasources de type Services
 * @class
 */
var DataSourceConfig = /** @class */ (function () {
    function DataSourceConfig(scope, methodName, fetchAttrName) {
        this.scope = scope;
        this.methodName = methodName;
        this.fetchAttrName = fetchAttrName;
    }
    return DataSourceConfig;
}());
exports.DataSourceConfig = DataSourceConfig;



/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(258);
var _ = __webpack_require__(6);
var classNames = __webpack_require__(9);
var key_codes_1 = __webpack_require__(10);
/**
 * Champ de formulaire Hornet de type Checkbox
 */
var CheckBoxField = /** @class */ (function (_super) {
    tslib_1.__extends(CheckBoxField, _super);
    function CheckBoxField(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (props.readOnly) {
            // permet de désactiver le click lorsqu'uniquement readOnly par défaut
            _this.copyInitialPropsToState({ readOnly: true, disabled: true }, _this.state);
        }
        if (!_this.props.labelOnOff) {
            _this.state.labelOnOff = {
                "on": _this.i18n("form.checkbox.booleanOui"),
                "off": _this.i18n("form.checkbox.booleanNon")
            };
        }
        return _this;
    }
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     * @override
     */
    CheckBoxField.prototype.renderWidget = function () {
        var cx = classNames(this.state.groupClass, "checkbox-container", {
            "inline": this.state.inline == abstract_field_1.InlineStyle.ALL || this.state.inline == abstract_field_1.InlineStyle.FIELD,
            "readonly": this.state.readOnly
        });
        var htmlProps = this.getHtmlProps();
        if (this.state.currentChecked != null) {
            _.assign(htmlProps, { "defaultChecked": this.state.currentChecked });
        }
        if (this.state.readOnly && !this.state.disabled) {
            htmlProps.disabled = true;
        }
        var element;
        if (this.state.readOnly) {
            delete htmlProps["onChange"];
        }
        if (this.state.switch) {
            element = this.renderSwitch(htmlProps);
        }
        else {
            element = this.renderCheckbox(htmlProps);
        }
        return (React.createElement("div", { className: cx }, element));
    };
    /**
     * Génère le rendu du champ en mode switch
     * @returns {any}
     */
    CheckBoxField.prototype.renderSwitch = function (htmlProps) {
        var _this = this;
        var labelOn = this.state.labelOnOff.on;
        var labelOff = this.state.labelOnOff.off;
        return (React.createElement("div", { className: "switch-content" },
            React.createElement("label", { className: "switch", onKeyDown: this.handleKeyDown },
                React.createElement("input", tslib_1.__assign({ ref: function (elt) { return _this.registerHtmlElement(elt); }, type: "checkbox", className: "switch-input" }, htmlProps, { value: "true" })),
                React.createElement("span", { "data-off": labelOff, "data-on": labelOn, className: "switch-label" }),
                React.createElement("span", { className: "switch-handle" }))));
    };
    /**
     * Génère le rendu du champ en mode checkbox
     * @returns {any}
     */
    CheckBoxField.prototype.renderCheckbox = function (htmlProps) {
        var _this = this;
        var classNamesSpan = {
            check: true,
            readonly: this.state.readOnly
        };
        return (React.createElement("div", { className: "checkbox-container" },
            React.createElement("label", { className: "checkbox-content", onKeyDown: this.handleKeyDown },
                React.createElement("input", tslib_1.__assign({ ref: function (elt) { return _this.registerHtmlElement(elt); }, type: "checkbox" }, htmlProps, { value: "true" })),
                React.createElement("span", { className: "checkbox-material" },
                    React.createElement("span", { className: classNames(classNamesSpan) })))));
    };
    /**
     * prise en compte de la navigation clavier pour les touches entrée et espace
     * @param e
     */
    CheckBoxField.prototype.handleKeyDown = function (e) {
        if (e.keyCode == key_codes_1.KeyCodes.ENTER) {
            this.setCurrentChecked(!this.getCurrentValue());
            e.preventDefault();
            e.stopPropagation();
        }
    };
    CheckBoxField.defaultProps = _.assign(abstract_field_1.AbstractField.defaultProps, {
        switch: false
    });
    return CheckBoxField;
}(abstract_field_1.AbstractField));
exports.CheckBoxField = CheckBoxField;



/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var Ajv = __webpack_require__(361);
;
;
/**
 * Contient tous les éléments nécessaires à une validation de données
 */
var DataValidator = /** @class */ (function () {
    function DataValidator(schema, customValidators, options) {
        if (options === void 0) { options = DataValidator.DEFAULT_VALIDATION_OPTIONS; }
        this.schema = schema;
        this.customValidators = customValidators;
        this.options = options;
    }
    /**
     * Exécute la validation
     * @param data données à valider
     * @return {IValidationResult} résultat de la validation
     */
    DataValidator.prototype.validate = function (data) {
        var result = {
            valid: true,
            errors: []
        };
        if (this.schema) {
            var ajvInstance = Ajv(this.options);
            __webpack_require__(394)(ajvInstance);
            result.valid = ajvInstance.validate(this.schema, data);
            result.errors = ajvInstance.errors || [];
        }
        /* Prise en compte des valideurs customisés éventuels */
        if (this.customValidators) {
            for (var index in this.customValidators) {
                if (this.customValidators[index] && (typeof this.customValidators[index] != "function")) {
                    var customResult = this.customValidators[index].validate(data);
                    if (!customResult.valid && customResult.errors) {
                        result.errors = result.errors.concat(customResult.errors);
                    }
                    result.valid = result.valid && customResult.valid;
                }
            }
        }
        if (result.errors && Array.isArray(result.errors)) {
            for (var index in result.errors) {
                result.errors[index].dataPath = result.errors[index].dataPath.replace("'][", ".").replace("['", "").replace("]", "");
            }
        }
        return result;
    };
    /**
     * Transforme le schéma de validation indiqué en un schéma JSON-Schema valide. Dans le schéma passé en paramètre,
     * le mot clé "required" peut-être spécifié par champ de type string.
     * En sortie les noms champs obligatoires sont regroupés dans un tableau, conformément à la spécification JSON-Schema
     * et le mot-clé "minLength" est utilisé pour les champs obligatoires.
     * Exemple :
     * {
     *  "$schema": "http://json-schema.org/schema#",
     *  "type": "object",
     *  "properties": {
     *      "champ1": {"type": "string", "required": true},
     *      "champ2": {"type": "number"}
     *  }
     * }
     *
     * devient :
     * {
     *  "$schema": "http://json-schema.org/schema#",
     *  "type": "object",
     *  "properties": {
     *      "champ1": {"type": "string", "minLength": 1},
     *      "champ2": {"type": "number"}
     *  },
     *  "required": ["champ1"]
     * }
     *
     * @param hornetSchema schéma de validation
     * @return un schéma json-schema valide
     */
    DataValidator.transformRequiredStrings = function (hornetSchema) {
        var resultSchema;
        if (hornetSchema) {
            resultSchema = _.cloneDeep(hornetSchema);
            resultSchema.required = resultSchema.required || [];
            // TODO à appliquer récursivement, chaque champ pouvant lui même être un objet
            for (var fn in resultSchema.properties) {
                var field = resultSchema.properties[fn];
                if (field.required === true && field.type == "string") {
                    field.minLength = 1;
                    if (resultSchema.required.indexOf(fn) == -1) {
                        resultSchema.required.push(fn);
                    }
                    delete field.required;
                }
            }
            /* Aucune propriété n'est requise : on supprime dans ce cas la propriété required pour être compatible avec ajv */
            if (resultSchema.required.length == 0) {
                delete resultSchema.required;
            }
        }
        return resultSchema;
    };
    /**
     * Options de validation ajv par défaut, utilisables côté client et serveur (les dates sont supposées être des
     * chaînes de caractères au format ISO 8601)
     */
    DataValidator.DEFAULT_VALIDATION_OPTIONS = {
        /* Activation des mots clé json-schema v5 (https://github.com/json-schema/json-schema/wiki/v5-Proposals) */
        v5: true,
        /* Valide tous les champs : ne s'arrête pas à la première erreur */
        allErrors: true,
        /* Convertit les chaînes de caractères vers le type indiqué dans le schéma de validation */
        coerceTypes: true,
        /* Prend en compte les valeurs par défaut éventuellement présentes dans le schéma */
        useDefaults: true,
        /* Mode de validation complet : impacte les formats date, time, date-time, uri, email, et hostname.
        En mode 'full', les champs de format "email' sont validés en appliquant la RFC 5322. */
        format: "full"
    };
    return DataValidator;
}());
exports.DataValidator = DataValidator;



/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compileSchema = __webpack_require__(362)
  , resolve = __webpack_require__(286)
  , Cache = __webpack_require__(365)
  , SchemaObject = __webpack_require__(317)
  , stableStringify = __webpack_require__(318)
  , formats = __webpack_require__(366)
  , rules = __webpack_require__(367)
  , $dataMetaSchema = __webpack_require__(388)
  , util = __webpack_require__(261);

module.exports = Ajv;

Ajv.prototype.validate = validate;
Ajv.prototype.compile = compile;
Ajv.prototype.addSchema = addSchema;
Ajv.prototype.addMetaSchema = addMetaSchema;
Ajv.prototype.validateSchema = validateSchema;
Ajv.prototype.getSchema = getSchema;
Ajv.prototype.removeSchema = removeSchema;
Ajv.prototype.addFormat = addFormat;
Ajv.prototype.errorsText = errorsText;

Ajv.prototype._addSchema = _addSchema;
Ajv.prototype._compile = _compile;

Ajv.prototype.compileAsync = __webpack_require__(389);
var customKeyword = __webpack_require__(390);
Ajv.prototype.addKeyword = customKeyword.add;
Ajv.prototype.getKeyword = customKeyword.get;
Ajv.prototype.removeKeyword = customKeyword.remove;

var errorClasses = __webpack_require__(288);
Ajv.ValidationError = errorClasses.Validation;
Ajv.MissingRefError = errorClasses.MissingRef;
Ajv.$dataMetaSchema = $dataMetaSchema;

var META_SCHEMA_ID = 'http://json-schema.org/draft-07/schema';

var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes' ];
var META_SUPPORT_DATA = ['/properties'];

/**
 * Creates validator instance.
 * Usage: `Ajv(opts)`
 * @param {Object} opts optional options
 * @return {Object} ajv instance
 */
function Ajv(opts) {
  if (!(this instanceof Ajv)) return new Ajv(opts);
  opts = this._opts = util.copy(opts) || {};
  setLogger(this);
  this._schemas = {};
  this._refs = {};
  this._fragments = {};
  this._formats = formats(opts.format);
  var schemaUriFormat = this._schemaUriFormat = this._formats['uri-reference'];
  this._schemaUriFormatFunc = function (str) { return schemaUriFormat.test(str); };

  this._cache = opts.cache || new Cache;
  this._loadingSchemas = {};
  this._compilations = [];
  this.RULES = rules();
  this._getId = chooseGetId(opts);

  opts.loopRequired = opts.loopRequired || Infinity;
  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
  if (opts.serialize === undefined) opts.serialize = stableStringify;
  this._metaOpts = getMetaSchemaOptions(this);

  if (opts.formats) addInitialFormats(this);
  addDraft6MetaSchema(this);
  if (typeof opts.meta == 'object') this.addMetaSchema(opts.meta);
  addInitialSchemas(this);
}



/**
 * Validate data using schema
 * Schema will be compiled and cached (using serialized JSON as key. [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize.
 * @this   Ajv
 * @param  {String|Object} schemaKeyRef key, ref or schema object
 * @param  {Any} data to be validated
 * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
 */
function validate(schemaKeyRef, data) {
  var v;
  if (typeof schemaKeyRef == 'string') {
    v = this.getSchema(schemaKeyRef);
    if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
  } else {
    var schemaObj = this._addSchema(schemaKeyRef);
    v = schemaObj.validate || this._compile(schemaObj);
  }

  var valid = v(data);
  if (v.$async !== true) this.errors = v.errors;
  return valid;
}


/**
 * Create validating function for passed schema.
 * @this   Ajv
 * @param  {Object} schema schema object
 * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
 * @return {Function} validating function
 */
function compile(schema, _meta) {
  var schemaObj = this._addSchema(schema, undefined, _meta);
  return schemaObj.validate || this._compile(schemaObj);
}


/**
 * Adds schema to the instance.
 * @this   Ajv
 * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
 * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
 * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
 * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
 * @return {Ajv} this for method chaining
 */
function addSchema(schema, key, _skipValidation, _meta) {
  if (Array.isArray(schema)){
    for (var i=0; i<schema.length; i++) this.addSchema(schema[i], undefined, _skipValidation, _meta);
    return this;
  }
  var id = this._getId(schema);
  if (id !== undefined && typeof id != 'string')
    throw new Error('schema id must be string');
  key = resolve.normalizeId(key || id);
  checkUnique(this, key);
  this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
  return this;
}


/**
 * Add schema that will be used to validate other schemas
 * options in META_IGNORE_OPTIONS are alway set to false
 * @this   Ajv
 * @param {Object} schema schema object
 * @param {String} key optional schema key
 * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
 * @return {Ajv} this for method chaining
 */
function addMetaSchema(schema, key, skipValidation) {
  this.addSchema(schema, key, skipValidation, true);
  return this;
}


/**
 * Validate schema
 * @this   Ajv
 * @param {Object} schema schema to validate
 * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
 * @return {Boolean} true if schema is valid
 */
function validateSchema(schema, throwOrLogError) {
  var $schema = schema.$schema;
  if ($schema !== undefined && typeof $schema != 'string')
    throw new Error('$schema must be a string');
  $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
  if (!$schema) {
    this.logger.warn('meta-schema not available');
    this.errors = null;
    return true;
  }
  var currentUriFormat = this._formats.uri;
  this._formats.uri = typeof currentUriFormat == 'function'
                      ? this._schemaUriFormatFunc
                      : this._schemaUriFormat;
  var valid;
  try { valid = this.validate($schema, schema); }
  finally { this._formats.uri = currentUriFormat; }
  if (!valid && throwOrLogError) {
    var message = 'schema is invalid: ' + this.errorsText();
    if (this._opts.validateSchema == 'log') this.logger.error(message);
    else throw new Error(message);
  }
  return valid;
}


function defaultMeta(self) {
  var meta = self._opts.meta;
  self._opts.defaultMeta = typeof meta == 'object'
                            ? self._getId(meta) || meta
                            : self.getSchema(META_SCHEMA_ID)
                              ? META_SCHEMA_ID
                              : undefined;
  return self._opts.defaultMeta;
}


/**
 * Get compiled schema from the instance by `key` or `ref`.
 * @this   Ajv
 * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
 * @return {Function} schema validating function (with property `schema`).
 */
function getSchema(keyRef) {
  var schemaObj = _getSchemaObj(this, keyRef);
  switch (typeof schemaObj) {
    case 'object': return schemaObj.validate || this._compile(schemaObj);
    case 'string': return this.getSchema(schemaObj);
    case 'undefined': return _getSchemaFragment(this, keyRef);
  }
}


function _getSchemaFragment(self, ref) {
  var res = resolve.schema.call(self, { schema: {} }, ref);
  if (res) {
    var schema = res.schema
      , root = res.root
      , baseId = res.baseId;
    var v = compileSchema.call(self, schema, root, undefined, baseId);
    self._fragments[ref] = new SchemaObject({
      ref: ref,
      fragment: true,
      schema: schema,
      root: root,
      baseId: baseId,
      validate: v
    });
    return v;
  }
}


function _getSchemaObj(self, keyRef) {
  keyRef = resolve.normalizeId(keyRef);
  return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
}


/**
 * Remove cached schema(s).
 * If no parameter is passed all schemas but meta-schemas are removed.
 * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
 * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
 * @this   Ajv
 * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
 * @return {Ajv} this for method chaining
 */
function removeSchema(schemaKeyRef) {
  if (schemaKeyRef instanceof RegExp) {
    _removeAllSchemas(this, this._schemas, schemaKeyRef);
    _removeAllSchemas(this, this._refs, schemaKeyRef);
    return this;
  }
  switch (typeof schemaKeyRef) {
    case 'undefined':
      _removeAllSchemas(this, this._schemas);
      _removeAllSchemas(this, this._refs);
      this._cache.clear();
      return this;
    case 'string':
      var schemaObj = _getSchemaObj(this, schemaKeyRef);
      if (schemaObj) this._cache.del(schemaObj.cacheKey);
      delete this._schemas[schemaKeyRef];
      delete this._refs[schemaKeyRef];
      return this;
    case 'object':
      var serialize = this._opts.serialize;
      var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
      this._cache.del(cacheKey);
      var id = this._getId(schemaKeyRef);
      if (id) {
        id = resolve.normalizeId(id);
        delete this._schemas[id];
        delete this._refs[id];
      }
  }
  return this;
}


function _removeAllSchemas(self, schemas, regex) {
  for (var keyRef in schemas) {
    var schemaObj = schemas[keyRef];
    if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
      self._cache.del(schemaObj.cacheKey);
      delete schemas[keyRef];
    }
  }
}


/* @this   Ajv */
function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
  if (typeof schema != 'object' && typeof schema != 'boolean')
    throw new Error('schema should be object or boolean');
  var serialize = this._opts.serialize;
  var cacheKey = serialize ? serialize(schema) : schema;
  var cached = this._cache.get(cacheKey);
  if (cached) return cached;

  shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;

  var id = resolve.normalizeId(this._getId(schema));
  if (id && shouldAddSchema) checkUnique(this, id);

  var willValidate = this._opts.validateSchema !== false && !skipValidation;
  var recursiveMeta;
  if (willValidate && !(recursiveMeta = id && id == resolve.normalizeId(schema.$schema)))
    this.validateSchema(schema, true);

  var localRefs = resolve.ids.call(this, schema);

  var schemaObj = new SchemaObject({
    id: id,
    schema: schema,
    localRefs: localRefs,
    cacheKey: cacheKey,
    meta: meta
  });

  if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;
  this._cache.put(cacheKey, schemaObj);

  if (willValidate && recursiveMeta) this.validateSchema(schema, true);

  return schemaObj;
}


/* @this   Ajv */
function _compile(schemaObj, root) {
  if (schemaObj.compiling) {
    schemaObj.validate = callValidate;
    callValidate.schema = schemaObj.schema;
    callValidate.errors = null;
    callValidate.root = root ? root : callValidate;
    if (schemaObj.schema.$async === true)
      callValidate.$async = true;
    return callValidate;
  }
  schemaObj.compiling = true;

  var currentOpts;
  if (schemaObj.meta) {
    currentOpts = this._opts;
    this._opts = this._metaOpts;
  }

  var v;
  try { v = compileSchema.call(this, schemaObj.schema, root, schemaObj.localRefs); }
  finally {
    schemaObj.compiling = false;
    if (schemaObj.meta) this._opts = currentOpts;
  }

  schemaObj.validate = v;
  schemaObj.refs = v.refs;
  schemaObj.refVal = v.refVal;
  schemaObj.root = v.root;
  return v;


  function callValidate() {
    var _validate = schemaObj.validate;
    var result = _validate.apply(null, arguments);
    callValidate.errors = _validate.errors;
    return result;
  }
}


function chooseGetId(opts) {
  switch (opts.schemaId) {
    case 'auto': return _get$IdOrId;
    case 'id': return _getId;
    default: return _get$Id;
  }
}

/* @this   Ajv */
function _getId(schema) {
  if (schema.$id) this.logger.warn('schema $id ignored', schema.$id);
  return schema.id;
}

/* @this   Ajv */
function _get$Id(schema) {
  if (schema.id) this.logger.warn('schema id ignored', schema.id);
  return schema.$id;
}


function _get$IdOrId(schema) {
  if (schema.$id && schema.id && schema.$id != schema.id)
    throw new Error('schema $id is different from id');
  return schema.$id || schema.id;
}


/**
 * Convert array of error message objects to string
 * @this   Ajv
 * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
 * @param  {Object} options optional options with properties `separator` and `dataVar`.
 * @return {String} human readable string with all errors descriptions
 */
function errorsText(errors, options) {
  errors = errors || this.errors;
  if (!errors) return 'No errors';
  options = options || {};
  var separator = options.separator === undefined ? ', ' : options.separator;
  var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

  var text = '';
  for (var i=0; i<errors.length; i++) {
    var e = errors[i];
    if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
  }
  return text.slice(0, -separator.length);
}


/**
 * Add custom format
 * @this   Ajv
 * @param {String} name format name
 * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
 * @return {Ajv} this for method chaining
 */
function addFormat(name, format) {
  if (typeof format == 'string') format = new RegExp(format);
  this._formats[name] = format;
  return this;
}


function addDraft6MetaSchema(self) {
  var $dataSchema;
  if (self._opts.$data) {
    $dataSchema = __webpack_require__(392);
    self.addMetaSchema($dataSchema, $dataSchema.$id, true);
  }
  if (self._opts.meta === false) return;
  var metaSchema = __webpack_require__(393);
  if (self._opts.$data) metaSchema = $dataMetaSchema(metaSchema, META_SUPPORT_DATA);
  self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
  self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
}


function addInitialSchemas(self) {
  var optsSchemas = self._opts.schemas;
  if (!optsSchemas) return;
  if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);
  else for (var key in optsSchemas) self.addSchema(optsSchemas[key], key);
}


function addInitialFormats(self) {
  for (var name in self._opts.formats) {
    var format = self._opts.formats[name];
    self.addFormat(name, format);
  }
}


function checkUnique(self, id) {
  if (self._schemas[id] || self._refs[id])
    throw new Error('schema with key or id "' + id + '" already exists');
}


function getMetaSchemaOptions(self) {
  var metaOpts = util.copy(self._opts);
  for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
    delete metaOpts[META_IGNORE_OPTIONS[i]];
  return metaOpts;
}


function setLogger(self) {
  var logger = self._opts.logger;
  if (logger === false) {
    self.logger = {log: noop, warn: noop, error: noop};
  } else {
    if (logger === undefined) logger = console;
    if (!(typeof logger == 'object' && logger.log && logger.warn && logger.error))
      throw new Error('logger must implement log, warn and error methods');
    self.logger = logger;
  }
}


function noop() {}


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve = __webpack_require__(286)
  , util = __webpack_require__(261)
  , errorClasses = __webpack_require__(288)
  , stableStringify = __webpack_require__(318);

var validateGenerator = __webpack_require__(319);

/**
 * Functions below are used inside compiled validations function
 */

var ucs2length = util.ucs2length;
var equal = __webpack_require__(287);

// this error is thrown by async schemas to return validation errors via exception
var ValidationError = errorClasses.Validation;

module.exports = compile;


/**
 * Compiles schema to validation function
 * @this   Ajv
 * @param  {Object} schema schema object
 * @param  {Object} root object with information about the root schema for this schema
 * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
 * @param  {String} baseId base ID for IDs in the schema
 * @return {Function} validation function
 */
function compile(schema, root, localRefs, baseId) {
  /* jshint validthis: true, evil: true */
  /* eslint no-shadow: 0 */
  var self = this
    , opts = this._opts
    , refVal = [ undefined ]
    , refs = {}
    , patterns = []
    , patternsHash = {}
    , defaults = []
    , defaultsHash = {}
    , customRules = [];

  root = root || { schema: schema, refVal: refVal, refs: refs };

  var c = checkCompiling.call(this, schema, root, baseId);
  var compilation = this._compilations[c.index];
  if (c.compiling) return (compilation.callValidate = callValidate);

  var formats = this._formats;
  var RULES = this.RULES;

  try {
    var v = localCompile(schema, root, localRefs, baseId);
    compilation.validate = v;
    var cv = compilation.callValidate;
    if (cv) {
      cv.schema = v.schema;
      cv.errors = null;
      cv.refs = v.refs;
      cv.refVal = v.refVal;
      cv.root = v.root;
      cv.$async = v.$async;
      if (opts.sourceCode) cv.source = v.source;
    }
    return v;
  } finally {
    endCompiling.call(this, schema, root, baseId);
  }

  function callValidate() {
    var validate = compilation.validate;
    var result = validate.apply(null, arguments);
    callValidate.errors = validate.errors;
    return result;
  }

  function localCompile(_schema, _root, localRefs, baseId) {
    var isRoot = !_root || (_root && _root.schema == _schema);
    if (_root.schema != root.schema)
      return compile.call(self, _schema, _root, localRefs, baseId);

    var $async = _schema.$async === true;

    var sourceCode = validateGenerator({
      isTop: true,
      schema: _schema,
      isRoot: isRoot,
      baseId: baseId,
      root: _root,
      schemaPath: '',
      errSchemaPath: '#',
      errorPath: '""',
      MissingRefError: errorClasses.MissingRef,
      RULES: RULES,
      validate: validateGenerator,
      util: util,
      resolve: resolve,
      resolveRef: resolveRef,
      usePattern: usePattern,
      useDefault: useDefault,
      useCustomRule: useCustomRule,
      opts: opts,
      formats: formats,
      logger: self.logger,
      self: self
    });

    sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
                   + vars(defaults, defaultCode) + vars(customRules, customRuleCode)
                   + sourceCode;

    if (opts.processCode) sourceCode = opts.processCode(sourceCode);
    // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));
    var validate;
    try {
      var makeValidate = new Function(
        'self',
        'RULES',
        'formats',
        'root',
        'refVal',
        'defaults',
        'customRules',
        'equal',
        'ucs2length',
        'ValidationError',
        sourceCode
      );

      validate = makeValidate(
        self,
        RULES,
        formats,
        root,
        refVal,
        defaults,
        customRules,
        equal,
        ucs2length,
        ValidationError
      );

      refVal[0] = validate;
    } catch(e) {
      self.logger.error('Error compiling schema, function code:', sourceCode);
      throw e;
    }

    validate.schema = _schema;
    validate.errors = null;
    validate.refs = refs;
    validate.refVal = refVal;
    validate.root = isRoot ? validate : _root;
    if ($async) validate.$async = true;
    if (opts.sourceCode === true) {
      validate.source = {
        code: sourceCode,
        patterns: patterns,
        defaults: defaults
      };
    }

    return validate;
  }

  function resolveRef(baseId, ref, isRoot) {
    ref = resolve.url(baseId, ref);
    var refIndex = refs[ref];
    var _refVal, refCode;
    if (refIndex !== undefined) {
      _refVal = refVal[refIndex];
      refCode = 'refVal[' + refIndex + ']';
      return resolvedRef(_refVal, refCode);
    }
    if (!isRoot && root.refs) {
      var rootRefId = root.refs[ref];
      if (rootRefId !== undefined) {
        _refVal = root.refVal[rootRefId];
        refCode = addLocalRef(ref, _refVal);
        return resolvedRef(_refVal, refCode);
      }
    }

    refCode = addLocalRef(ref);
    var v = resolve.call(self, localCompile, root, ref);
    if (v === undefined) {
      var localSchema = localRefs && localRefs[ref];
      if (localSchema) {
        v = resolve.inlineRef(localSchema, opts.inlineRefs)
            ? localSchema
            : compile.call(self, localSchema, root, localRefs, baseId);
      }
    }

    if (v === undefined) {
      removeLocalRef(ref);
    } else {
      replaceLocalRef(ref, v);
      return resolvedRef(v, refCode);
    }
  }

  function addLocalRef(ref, v) {
    var refId = refVal.length;
    refVal[refId] = v;
    refs[ref] = refId;
    return 'refVal' + refId;
  }

  function removeLocalRef(ref) {
    delete refs[ref];
  }

  function replaceLocalRef(ref, v) {
    var refId = refs[ref];
    refVal[refId] = v;
  }

  function resolvedRef(refVal, code) {
    return typeof refVal == 'object' || typeof refVal == 'boolean'
            ? { code: code, schema: refVal, inline: true }
            : { code: code, $async: refVal && !!refVal.$async };
  }

  function usePattern(regexStr) {
    var index = patternsHash[regexStr];
    if (index === undefined) {
      index = patternsHash[regexStr] = patterns.length;
      patterns[index] = regexStr;
    }
    return 'pattern' + index;
  }

  function useDefault(value) {
    switch (typeof value) {
      case 'boolean':
      case 'number':
        return '' + value;
      case 'string':
        return util.toQuotedString(value);
      case 'object':
        if (value === null) return 'null';
        var valueStr = stableStringify(value);
        var index = defaultsHash[valueStr];
        if (index === undefined) {
          index = defaultsHash[valueStr] = defaults.length;
          defaults[index] = value;
        }
        return 'default' + index;
    }
  }

  function useCustomRule(rule, schema, parentSchema, it) {
    var validateSchema = rule.definition.validateSchema;
    if (validateSchema && self._opts.validateSchema !== false) {
      var valid = validateSchema(schema);
      if (!valid) {
        var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
        if (self._opts.validateSchema == 'log') self.logger.error(message);
        else throw new Error(message);
      }
    }

    var compile = rule.definition.compile
      , inline = rule.definition.inline
      , macro = rule.definition.macro;

    var validate;
    if (compile) {
      validate = compile.call(self, schema, parentSchema, it);
    } else if (macro) {
      validate = macro.call(self, schema, parentSchema, it);
      if (opts.validateSchema !== false) self.validateSchema(validate, true);
    } else if (inline) {
      validate = inline.call(self, it, rule.keyword, schema, parentSchema);
    } else {
      validate = rule.definition.validate;
      if (!validate) return;
    }

    if (validate === undefined)
      throw new Error('custom keyword "' + rule.keyword + '"failed to compile');

    var index = customRules.length;
    customRules[index] = validate;

    return {
      code: 'customRule' + index,
      validate: validate
    };
  }
}


/**
 * Checks if the schema is currently compiled
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
 */
function checkCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var index = compIndex.call(this, schema, root, baseId);
  if (index >= 0) return { index: index, compiling: true };
  index = this._compilations.length;
  this._compilations[index] = {
    schema: schema,
    root: root,
    baseId: baseId
  };
  return { index: index, compiling: false };
}


/**
 * Removes the schema from the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 */
function endCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var i = compIndex.call(this, schema, root, baseId);
  if (i >= 0) this._compilations.splice(i, 1);
}


/**
 * Index of schema compilation in the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Integer} compilation index
 */
function compIndex(schema, root, baseId) {
  /* jshint validthis: true */
  for (var i=0; i<this._compilations.length; i++) {
    var c = this._compilations[i];
    if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
  }
  return -1;
}


function patternCode(i, patterns) {
  return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
}


function defaultCode(i) {
  return 'var default' + i + ' = defaults[' + i + '];';
}


function refValCode(i, refVal) {
  return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
}


function customRuleCode(i) {
  return 'var customRule' + i + ' = customRules[' + i + '];';
}


function vars(arr, statement) {
  if (!arr.length) return '';
  var code = '';
  for (var i=0; i<arr.length; i++)
    code += statement(i, arr);
  return code;
}


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
module.exports = function ucs2length(str) {
  var length = 0
    , len = str.length
    , pos = 0
    , value;
  while (pos < len) {
    length++;
    value = str.charCodeAt(pos++);
    if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
      // high surrogate, and there is a next character
      value = str.charCodeAt(pos);
      if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
    }
  }
  return length;
};


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var traverse = module.exports = function (schema, opts, cb) {
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }
  _traverse(opts, cb, schema, '', schema);
};


traverse.keywords = {
  additionalItems: true,
  items: true,
  contains: true,
  additionalProperties: true,
  propertyNames: true,
  not: true
};

traverse.arrayKeywords = {
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true
};

traverse.propsKeywords = {
  definitions: true,
  properties: true,
  patternProperties: true,
  dependencies: true
};

traverse.skipKeywords = {
  enum: true,
  const: true,
  required: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true
};


function _traverse(opts, cb, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
    cb(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    for (var key in schema) {
      var sch = schema[key];
      if (Array.isArray(sch)) {
        if (key in traverse.arrayKeywords) {
          for (var i=0; i<sch.length; i++)
            _traverse(opts, cb, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
        }
      } else if (key in traverse.propsKeywords) {
        if (sch && typeof sch == 'object') {
          for (var prop in sch)
            _traverse(opts, cb, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
        }
      } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {
        _traverse(opts, cb, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
      }
    }
  }
}


function escapeJsonPtr(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var Cache = module.exports = function Cache() {
  this._cache = {};
};


Cache.prototype.put = function Cache_put(key, value) {
  this._cache[key] = value;
};


Cache.prototype.get = function Cache_get(key) {
  return this._cache[key];
};


Cache.prototype.del = function Cache_del(key) {
  delete this._cache[key];
};


Cache.prototype.clear = function Cache_clear() {
  this._cache = {};
};


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(261);

var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0,31,28,31,30,31,30,31,31,30,31,30,31];
var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var HOSTNAME = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
// uri-template: https://tools.ietf.org/html/rfc6570
var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
// For the source: https://gist.github.com/dperini/729294
// For test cases: https://mathiasbynens.be/demo/url-regex
// @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
// var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;


module.exports = formats;

function formats(mode) {
  mode = mode == 'full' ? 'full' : 'fast';
  return util.copy(formats[mode]);
}


formats.fast = {
  // date: http://tools.ietf.org/html/rfc3339#section-5.6
  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
  time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
  'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
  uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
  'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
  'uri-template': URITEMPLATE,
  url: URL,
  // email (sources from jsen validator):
  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
  email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  hostname: HOSTNAME,
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: UUID,
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  'json-pointer': JSON_POINTER,
  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  'relative-json-pointer': RELATIVE_JSON_POINTER
};


formats.full = {
  date: date,
  time: time,
  'date-time': date_time,
  uri: uri,
  'uri-reference': URIREF,
  'uri-template': URITEMPLATE,
  url: URL,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: hostname,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  uuid: UUID,
  'json-pointer': JSON_POINTER,
  'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
  'relative-json-pointer': RELATIVE_JSON_POINTER
};


function isLeapYear(year) {
  // https://tools.ietf.org/html/rfc3339#appendix-C
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}


function date(str) {
  // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
  var matches = str.match(DATE);
  if (!matches) return false;

  var year = +matches[1];
  var month = +matches[2];
  var day = +matches[3];

  return month >= 1 && month <= 12 && day >= 1 &&
          day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
}


function time(str, full) {
  var matches = str.match(TIME);
  if (!matches) return false;

  var hour = matches[1];
  var minute = matches[2];
  var second = matches[3];
  var timeZone = matches[5];
  return ((hour <= 23 && minute <= 59 && second <= 59) ||
          (hour == 23 && minute == 59 && second == 60)) &&
         (!full || timeZone);
}


var DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
  // http://tools.ietf.org/html/rfc3339#section-5.6
  var dateTime = str.split(DATE_TIME_SEPARATOR);
  return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
}


function hostname(str) {
  // https://tools.ietf.org/html/rfc1034#section-3.5
  // https://tools.ietf.org/html/rfc1123#section-2
  return str.length <= 255 && HOSTNAME.test(str);
}


var NOT_URI_FRAGMENT = /\/|:/;
function uri(str) {
  // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}


var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str)) return false;
  try {
    new RegExp(str);
    return true;
  } catch(e) {
    return false;
  }
}


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ruleModules = __webpack_require__(368)
  , toHash = __webpack_require__(261).toHash;

module.exports = function rules() {
  var RULES = [
    { type: 'number',
      rules: [ { 'maximum': ['exclusiveMaximum'] },
               { 'minimum': ['exclusiveMinimum'] }, 'multipleOf', 'format'] },
    { type: 'string',
      rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
    { type: 'array',
      rules: [ 'maxItems', 'minItems', 'items', 'contains', 'uniqueItems' ] },
    { type: 'object',
      rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames',
               { 'properties': ['additionalProperties', 'patternProperties'] } ] },
    { rules: [ '$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if' ] }
  ];

  var ALL = [ 'type', '$comment' ];
  var KEYWORDS = [
    '$schema', '$id', 'id', '$data', 'title',
    'description', 'default', 'definitions',
    'examples', 'readOnly', 'writeOnly',
    'contentMediaType', 'contentEncoding',
    'additionalItems', 'then', 'else'
  ];
  var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
  RULES.all = toHash(ALL);
  RULES.types = toHash(TYPES);

  RULES.forEach(function (group) {
    group.rules = group.rules.map(function (keyword) {
      var implKeywords;
      if (typeof keyword == 'object') {
        var key = Object.keys(keyword)[0];
        implKeywords = keyword[key];
        keyword = key;
        implKeywords.forEach(function (k) {
          ALL.push(k);
          RULES.all[k] = true;
        });
      }
      ALL.push(keyword);
      var rule = RULES.all[keyword] = {
        keyword: keyword,
        code: ruleModules[keyword],
        implements: implKeywords
      };
      return rule;
    });

    RULES.all.$comment = {
      keyword: '$comment',
      code: ruleModules.$comment
    };

    if (group.type) RULES.types[group.type] = group;
  });

  RULES.keywords = toHash(ALL.concat(KEYWORDS));
  RULES.custom = {};

  return RULES;
};


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//all requires must be explicit because browserify won't work with dynamic requires
module.exports = {
  '$ref': __webpack_require__(369),
  allOf: __webpack_require__(370),
  anyOf: __webpack_require__(371),
  '$comment': __webpack_require__(372),
  const: __webpack_require__(373),
  contains: __webpack_require__(374),
  dependencies: __webpack_require__(375),
  'enum': __webpack_require__(376),
  format: __webpack_require__(377),
  'if': __webpack_require__(378),
  items: __webpack_require__(379),
  maximum: __webpack_require__(320),
  minimum: __webpack_require__(320),
  maxItems: __webpack_require__(321),
  minItems: __webpack_require__(321),
  maxLength: __webpack_require__(322),
  minLength: __webpack_require__(322),
  maxProperties: __webpack_require__(323),
  minProperties: __webpack_require__(323),
  multipleOf: __webpack_require__(380),
  not: __webpack_require__(381),
  oneOf: __webpack_require__(382),
  pattern: __webpack_require__(383),
  properties: __webpack_require__(384),
  propertyNames: __webpack_require__(385),
  required: __webpack_require__(386),
  uniqueItems: __webpack_require__(387),
  validate: __webpack_require__(319)
};


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_ref(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $async, $refCode;
  if ($schema == '#' || $schema == '#/') {
    if (it.isRoot) {
      $async = it.async;
      $refCode = 'validate';
    } else {
      $async = it.root.schema.$async === true;
      $refCode = 'root.refVal[0]';
    }
  } else {
    var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
    if ($refVal === undefined) {
      var $message = it.MissingRefError.message(it.baseId, $schema);
      if (it.opts.missingRefs == 'fail') {
        it.logger.error($message);
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        if ($breakOnError) {
          out += ' if (false) { ';
        }
      } else if (it.opts.missingRefs == 'ignore') {
        it.logger.warn($message);
        if ($breakOnError) {
          out += ' if (true) { ';
        }
      } else {
        throw new it.MissingRefError(it.baseId, $schema, $message);
      }
    } else if ($refVal.inline) {
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      $it.schema = $refVal.schema;
      $it.schemaPath = '';
      $it.errSchemaPath = $schema;
      var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
      out += ' ' + ($code) + ' ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
      }
    } else {
      $async = $refVal.$async === true || (it.async && $refVal.$async !== false);
      $refCode = $refVal.code;
    }
  }
  if ($refCode) {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    if (it.opts.passContext) {
      out += ' ' + ($refCode) + '.call(this, ';
    } else {
      out += ' ' + ($refCode) + '( ';
    }
    out += ' ' + ($data) + ', (dataPath || \'\')';
    if (it.errorPath != '""') {
      out += ' + ' + (it.errorPath);
    }
    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
    var __callValidate = out;
    out = $$outStack.pop();
    if ($async) {
      if (!it.async) throw new Error('async schema referenced by sync schema');
      if ($breakOnError) {
        out += ' var ' + ($valid) + '; ';
      }
      out += ' try { await ' + (__callValidate) + '; ';
      if ($breakOnError) {
        out += ' ' + ($valid) + ' = true; ';
      }
      out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
      if ($breakOnError) {
        out += ' ' + ($valid) + ' = false; ';
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' if (' + ($valid) + ') { ';
      }
    } else {
      out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
      if ($breakOnError) {
        out += ' else { ';
      }
    }
  }
  return out;
}


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_allOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $currentBaseId = $it.baseId,
    $allSchemasEmpty = true;
  var arr1 = $schema;
  if (arr1) {
    var $sch, $i = -1,
      l1 = arr1.length - 1;
    while ($i < l1) {
      $sch = arr1[$i += 1];
      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $allSchemasEmpty = false;
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }
  if ($breakOnError) {
    if ($allSchemasEmpty) {
      out += ' if (true) { ';
    } else {
      out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
    }
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_anyOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $noEmptySchema = $schema.every(function($sch) {
    return it.util.schemaHasRules($sch, it.RULES.all);
  });
  if ($noEmptySchema) {
    var $currentBaseId = $it.baseId;
    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
        $closingBraces += '}';
      }
    }
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match some schema in anyOf\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }
    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    if (it.opts.allErrors) {
      out += ' } ';
    }
    out = it.util.cleanUpCode(out);
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }
  return out;
}


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_comment(it, $keyword, $ruleType) {
  var out = ' ';
  var $schema = it.schema[$keyword];
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $comment = it.util.toQuotedString($schema);
  if (it.opts.$comment === true) {
    out += ' console.log(' + ($comment) + ');';
  } else if (typeof it.opts.$comment == 'function') {
    out += ' self._opts.$comment(' + ($comment) + ', ' + (it.util.toQuotedString($errSchemaPath)) + ', validate.root.schema);';
  }
  return out;
}


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_const(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if (!$isData) {
    out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
  }
  out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('const') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to constant\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' }';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_contains(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $idx = 'i' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt,
    $currentBaseId = it.baseId,
    $nonEmptySchema = it.util.schemaHasRules($schema, it.RULES.all);
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if ($nonEmptySchema) {
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + ($nextValid) + ' = false; for (var ' + ($idx) + ' = 0; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
    var $passData = $data + '[' + $idx + ']';
    $it.dataPathArr[$dataNxt] = $idx;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;
    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
    } else {
      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
    }
    out += ' if (' + ($nextValid) + ') break; }  ';
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($closingBraces) + ' if (!' + ($nextValid) + ') {';
  } else {
    out += ' if (' + ($data) + '.length == 0) {';
  }
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('contains') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should contain a valid item\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } else { ';
  if ($nonEmptySchema) {
    out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
  }
  if (it.opts.allErrors) {
    out += ' } ';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_dependencies(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $schemaDeps = {},
    $propertyDeps = {},
    $ownProperties = it.opts.ownProperties;
  for ($property in $schema) {
    var $sch = $schema[$property];
    var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
    $deps[$property] = $sch;
  }
  out += 'var ' + ($errs) + ' = errors;';
  var $currentErrorPath = it.errorPath;
  out += 'var missing' + ($lvl) + ';';
  for (var $property in $propertyDeps) {
    $deps = $propertyDeps[$property];
    if ($deps.length) {
      out += ' if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
      if ($ownProperties) {
        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
      }
      if ($breakOnError) {
        out += ' && ( ';
        var arr1 = $deps;
        if (arr1) {
          var $propertyKey, $i = -1,
            l1 = arr1.length - 1;
          while ($i < l1) {
            $propertyKey = arr1[$i += 1];
            if ($i) {
              out += ' || ';
            }
            var $prop = it.util.getProperty($propertyKey),
              $useData = $data + $prop;
            out += ' ( ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
          }
        }
        out += ')) {  ';
        var $propertyPath = 'missing' + $lvl,
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
        }
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should have ';
            if ($deps.length == 1) {
              out += 'property ' + (it.util.escapeQuotes($deps[0]));
            } else {
              out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
            }
            out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      } else {
        out += ' ) { ';
        var arr2 = $deps;
        if (arr2) {
          var $propertyKey, i2 = -1,
            l2 = arr2.length - 1;
          while (i2 < l2) {
            $propertyKey = arr2[i2 += 1];
            var $prop = it.util.getProperty($propertyKey),
              $missingProperty = it.util.escapeQuotes($propertyKey),
              $useData = $data + $prop;
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
            }
            out += ' if ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should have ';
                if ($deps.length == 1) {
                  out += 'property ' + (it.util.escapeQuotes($deps[0]));
                } else {
                  out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
                }
                out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
          }
        }
      }
      out += ' }   ';
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }
  it.errorPath = $currentErrorPath;
  var $currentBaseId = $it.baseId;
  for (var $property in $schemaDeps) {
    var $sch = $schemaDeps[$property];
    if (it.util.schemaHasRules($sch, it.RULES.all)) {
      out += ' ' + ($nextValid) + ' = true; if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
      if ($ownProperties) {
        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
      }
      out += ') { ';
      $it.schema = $sch;
      $it.schemaPath = $schemaPath + it.util.getProperty($property);
      $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
      out += '  ' + (it.validate($it)) + ' ';
      $it.baseId = $currentBaseId;
      out += ' }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
  }
  if ($breakOnError) {
    out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_enum(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $i = 'i' + $lvl,
    $vSchema = 'schema' + $lvl;
  if (!$isData) {
    out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
  }
  out += 'var ' + ($valid) + ';';
  if ($isData) {
    out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
  }
  out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
  if ($isData) {
    out += '  }  ';
  }
  out += ' if (!' + ($valid) + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to one of the allowed values\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' }';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_format(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  if (it.opts.format === false) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
    return out;
  }
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $unknownFormats = it.opts.unknownFormats,
    $allowUnknown = Array.isArray($unknownFormats);
  if ($isData) {
    var $format = 'format' + $lvl,
      $isObject = 'isObject' + $lvl,
      $formatType = 'formatType' + $lvl;
    out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var ' + ($isObject) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; var ' + ($formatType) + ' = ' + ($isObject) + ' && ' + ($format) + '.type || \'string\'; if (' + ($isObject) + ') { ';
    if (it.async) {
      out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
    }
    out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
    }
    out += ' (';
    if ($unknownFormats != 'ignore') {
      out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
      if ($allowUnknown) {
        out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
      }
      out += ') || ';
    }
    out += ' (' + ($format) + ' && ' + ($formatType) + ' == \'' + ($ruleType) + '\' && !(typeof ' + ($format) + ' == \'function\' ? ';
    if (it.async) {
      out += ' (async' + ($lvl) + ' ? await ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
    } else {
      out += ' ' + ($format) + '(' + ($data) + ') ';
    }
    out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
  } else {
    var $format = it.formats[$schema];
    if (!$format) {
      if ($unknownFormats == 'ignore') {
        it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      } else {
        throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
      }
    }
    var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
    var $formatType = $isObject && $format.type || 'string';
    if ($isObject) {
      var $async = $format.async === true;
      $format = $format.validate;
    }
    if ($formatType != $ruleType) {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
      return out;
    }
    if ($async) {
      if (!it.async) throw new Error('async format in sync schema');
      var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
      out += ' if (!(await ' + ($formatRef) + '(' + ($data) + '))) { ';
    } else {
      out += ' if (! ';
      var $formatRef = 'formats' + it.util.getProperty($schema);
      if ($isObject) $formatRef += '.validate';
      if (typeof $format == 'function') {
        out += ' ' + ($formatRef) + '(' + ($data) + ') ';
      } else {
        out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
      }
      out += ') { ';
    }
  }
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += '  } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match format "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_if(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $thenSch = it.schema['then'],
    $elseSch = it.schema['else'],
    $thenPresent = $thenSch !== undefined && it.util.schemaHasRules($thenSch, it.RULES.all),
    $elsePresent = $elseSch !== undefined && it.util.schemaHasRules($elseSch, it.RULES.all),
    $currentBaseId = $it.baseId;
  if ($thenPresent || $elsePresent) {
    var $ifClause;
    $it.createErrors = false;
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = true;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    out += '  ' + (it.validate($it)) + ' ';
    $it.baseId = $currentBaseId;
    $it.createErrors = true;
    out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }  ';
    it.compositeRule = $it.compositeRule = $wasComposite;
    if ($thenPresent) {
      out += ' if (' + ($nextValid) + ') {  ';
      $it.schema = it.schema['then'];
      $it.schemaPath = it.schemaPath + '.then';
      $it.errSchemaPath = it.errSchemaPath + '/then';
      out += '  ' + (it.validate($it)) + ' ';
      $it.baseId = $currentBaseId;
      out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
      if ($thenPresent && $elsePresent) {
        $ifClause = 'ifClause' + $lvl;
        out += ' var ' + ($ifClause) + ' = \'then\'; ';
      } else {
        $ifClause = '\'then\'';
      }
      out += ' } ';
      if ($elsePresent) {
        out += ' else { ';
      }
    } else {
      out += ' if (!' + ($nextValid) + ') { ';
    }
    if ($elsePresent) {
      $it.schema = it.schema['else'];
      $it.schemaPath = it.schemaPath + '.else';
      $it.errSchemaPath = it.errSchemaPath + '/else';
      out += '  ' + (it.validate($it)) + ' ';
      $it.baseId = $currentBaseId;
      out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
      if ($thenPresent && $elsePresent) {
        $ifClause = 'ifClause' + $lvl;
        out += ' var ' + ($ifClause) + ' = \'else\'; ';
      } else {
        $ifClause = '\'else\'';
      }
      out += ' } ';
    }
    out += ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('if') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { failingKeyword: ' + ($ifClause) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match "\' + ' + ($ifClause) + ' + \'" schema\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }
    out += ' }   ';
    if ($breakOnError) {
      out += ' else { ';
    }
    out = it.util.cleanUpCode(out);
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }
  return out;
}


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_items(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $idx = 'i' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt,
    $currentBaseId = it.baseId;
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if (Array.isArray($schema)) {
    var $additionalItems = it.schema.additionalItems;
    if ($additionalItems === false) {
      out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
      var $currErrSchemaPath = $errSchemaPath;
      $errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += '  if (!' + ($valid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } ';
      $errSchemaPath = $currErrSchemaPath;
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
          var $passData = $data + '[' + $i + ']';
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
          $it.dataPathArr[$dataNxt] = $i;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
    if (typeof $additionalItems == 'object' && it.util.schemaHasRules($additionalItems, it.RULES.all)) {
      $it.schema = $additionalItems;
      $it.schemaPath = it.schemaPath + '.additionalItems';
      $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      if ($breakOnError) {
        out += ' if (!' + ($nextValid) + ') break; ';
      }
      out += ' } }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
  } else if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
    var $passData = $data + '[' + $idx + ']';
    $it.dataPathArr[$dataNxt] = $idx;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;
    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
    } else {
      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
    }
    if ($breakOnError) {
      out += ' if (!' + ($nextValid) + ') break; ';
    }
    out += ' }';
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_multipleOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  out += 'var division' + ($lvl) + ';if (';
  if ($isData) {
    out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
  }
  out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
  if (it.opts.multipleOfPrecision) {
    out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
  } else {
    out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
  }
  out += ' ) ';
  if ($isData) {
    out += '  )  ';
  }
  out += ' ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be multiple of ';
      if ($isData) {
        out += '\' + ' + ($schemaValue);
      } else {
        out += '' + ($schemaValue) + '\'';
      }
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_not(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + ($errs) + ' = errors;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    $it.createErrors = false;
    var $allErrorsOption;
    if ($it.opts.allErrors) {
      $allErrorsOption = $it.opts.allErrors;
      $it.opts.allErrors = false;
    }
    out += ' ' + (it.validate($it)) + ' ';
    $it.createErrors = true;
    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' if (' + ($nextValid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    if (it.opts.allErrors) {
      out += ' } ';
    }
  } else {
    out += '  var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if ($breakOnError) {
      out += ' if (false) { ';
    }
  }
  return out;
}


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_oneOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $currentBaseId = $it.baseId,
    $prevValid = 'prevValid' + $lvl,
    $passingSchemas = 'passingSchemas' + $lvl;
  out += 'var ' + ($errs) + ' = errors , ' + ($prevValid) + ' = false , ' + ($valid) + ' = false , ' + ($passingSchemas) + ' = null; ';
  var $wasComposite = it.compositeRule;
  it.compositeRule = $it.compositeRule = true;
  var arr1 = $schema;
  if (arr1) {
    var $sch, $i = -1,
      l1 = arr1.length - 1;
    while ($i < l1) {
      $sch = arr1[$i += 1];
      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
      } else {
        out += ' var ' + ($nextValid) + ' = true; ';
      }
      if ($i) {
        out += ' if (' + ($nextValid) + ' && ' + ($prevValid) + ') { ' + ($valid) + ' = false; ' + ($passingSchemas) + ' = [' + ($passingSchemas) + ', ' + ($i) + ']; } else { ';
        $closingBraces += '}';
      }
      out += ' if (' + ($nextValid) + ') { ' + ($valid) + ' = ' + ($prevValid) + ' = true; ' + ($passingSchemas) + ' = ' + ($i) + '; }';
    }
  }
  it.compositeRule = $it.compositeRule = $wasComposite;
  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { passingSchemas: ' + ($passingSchemas) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match exactly one schema in oneOf\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError(vErrors); ';
    } else {
      out += ' validate.errors = vErrors; return false; ';
    }
  }
  out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
  if (it.opts.allErrors) {
    out += ' } ';
  }
  return out;
}


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_pattern(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
  }
  out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += '  } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match pattern "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_properties(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $key = 'key' + $lvl,
    $idx = 'idx' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt,
    $dataProperties = 'dataProperties' + $lvl;
  var $schemaKeys = Object.keys($schema || {}),
    $pProperties = it.schema.patternProperties || {},
    $pPropertyKeys = Object.keys($pProperties),
    $aProperties = it.schema.additionalProperties,
    $someProperties = $schemaKeys.length || $pPropertyKeys.length,
    $noAdditional = $aProperties === false,
    $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
    $removeAdditional = it.opts.removeAdditional,
    $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
    $ownProperties = it.opts.ownProperties,
    $currentBaseId = it.baseId;
  var $required = it.schema.required;
  if ($required && !(it.opts.v5 && $required.$data) && $required.length < it.opts.loopRequired) var $requiredHash = it.util.toHash($required);
  out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
  if ($ownProperties) {
    out += ' var ' + ($dataProperties) + ' = undefined;';
  }
  if ($checkAdditional) {
    if ($ownProperties) {
      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
    } else {
      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
    }
    if ($someProperties) {
      out += ' var isAdditional' + ($lvl) + ' = !(false ';
      if ($schemaKeys.length) {
        if ($schemaKeys.length > 5) {
          out += ' || validate.schema' + ($schemaPath) + '[' + ($key) + '] ';
        } else {
          var arr1 = $schemaKeys;
          if (arr1) {
            var $propertyKey, i1 = -1,
              l1 = arr1.length - 1;
            while (i1 < l1) {
              $propertyKey = arr1[i1 += 1];
              out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
            }
          }
        }
      }
      if ($pPropertyKeys.length) {
        var arr2 = $pPropertyKeys;
        if (arr2) {
          var $pProperty, $i = -1,
            l2 = arr2.length - 1;
          while ($i < l2) {
            $pProperty = arr2[$i += 1];
            out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
          }
        }
      }
      out += ' ); if (isAdditional' + ($lvl) + ') { ';
    }
    if ($removeAdditional == 'all') {
      out += ' delete ' + ($data) + '[' + ($key) + ']; ';
    } else {
      var $currentErrorPath = it.errorPath;
      var $additionalProperty = '\' + ' + $key + ' + \'';
      if (it.opts._errorDataPathProperty) {
        it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
      }
      if ($noAdditional) {
        if ($removeAdditional) {
          out += ' delete ' + ($data) + '[' + ($key) + ']; ';
        } else {
          out += ' ' + ($nextValid) + ' = false; ';
          var $currErrSchemaPath = $errSchemaPath;
          $errSchemaPath = it.errSchemaPath + '/additionalProperties';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is an invalid additional property';
              } else {
                out += 'should NOT have additional properties';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          $errSchemaPath = $currErrSchemaPath;
          if ($breakOnError) {
            out += ' break; ';
          }
        }
      } else if ($additionalIsSchema) {
        if ($removeAdditional == 'failing') {
          out += ' var ' + ($errs) + ' = errors;  ';
          var $wasComposite = it.compositeRule;
          it.compositeRule = $it.compositeRule = true;
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
          it.compositeRule = $it.compositeRule = $wasComposite;
        } else {
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
        }
      }
      it.errorPath = $currentErrorPath;
    }
    if ($someProperties) {
      out += ' } ';
    }
    out += ' }  ';
    if ($breakOnError) {
      out += ' if (' + ($nextValid) + ') { ';
      $closingBraces += '}';
    }
  }
  var $useDefaults = it.opts.useDefaults && !it.compositeRule;
  if ($schemaKeys.length) {
    var arr3 = $schemaKeys;
    if (arr3) {
      var $propertyKey, i3 = -1,
        l3 = arr3.length - 1;
      while (i3 < l3) {
        $propertyKey = arr3[i3 += 1];
        var $sch = $schema[$propertyKey];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          var $prop = it.util.getProperty($propertyKey),
            $passData = $data + $prop,
            $hasDefault = $useDefaults && $sch.default !== undefined;
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + $prop;
          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            $code = it.util.varReplace($code, $nextData, $passData);
            var $useData = $passData;
          } else {
            var $useData = $nextData;
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
          }
          if ($hasDefault) {
            out += ' ' + ($code) + ' ';
          } else {
            if ($requiredHash && $requiredHash[$propertyKey]) {
              out += ' if ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') { ' + ($nextValid) + ' = false; ';
              var $currentErrorPath = it.errorPath,
                $currErrSchemaPath = $errSchemaPath,
                $missingProperty = it.util.escapeQuotes($propertyKey);
              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }
              $errSchemaPath = it.errSchemaPath + '/required';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'';
                  if (it.opts._errorDataPathProperty) {
                    out += 'is a required property';
                  } else {
                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              $errSchemaPath = $currErrSchemaPath;
              it.errorPath = $currentErrorPath;
              out += ' } else { ';
            } else {
              if ($breakOnError) {
                out += ' if ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') { ' + ($nextValid) + ' = true; } else { ';
              } else {
                out += ' if (' + ($useData) + ' !== undefined ';
                if ($ownProperties) {
                  out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ' ) { ';
              }
            }
            out += ' ' + ($code) + ' } ';
          }
        }
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }
  if ($pPropertyKeys.length) {
    var arr4 = $pPropertyKeys;
    if (arr4) {
      var $pProperty, i4 = -1,
        l4 = arr4.length - 1;
      while (i4 < l4) {
        $pProperty = arr4[i4 += 1];
        var $sch = $pProperties[$pProperty];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          $it.schema = $sch;
          $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
          $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
          if ($ownProperties) {
            out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
          } else {
            out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
          }
          out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
          $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
          out += ' } ';
          if ($breakOnError) {
            out += ' else ' + ($nextValid) + ' = true; ';
          }
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_propertyNames(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    var $key = 'key' + $lvl,
      $idx = 'idx' + $lvl,
      $i = 'i' + $lvl,
      $invalidName = '\' + ' + $key + ' + \'',
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $dataProperties = 'dataProperties' + $lvl,
      $ownProperties = it.opts.ownProperties,
      $currentBaseId = it.baseId;
    out += ' var ' + ($errs) + ' = errors; ';
    if ($ownProperties) {
      out += ' var ' + ($dataProperties) + ' = undefined; ';
    }
    if ($ownProperties) {
      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
    } else {
      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
    }
    out += ' var startErrs' + ($lvl) + ' = errors; ';
    var $passData = $key;
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;
    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
    } else {
      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
    }
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' if (!' + ($nextValid) + ') { for (var ' + ($i) + '=startErrs' + ($lvl) + '; ' + ($i) + '<errors; ' + ($i) + '++) { vErrors[' + ($i) + '].propertyName = ' + ($key) + '; }   var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('propertyNames') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { propertyName: \'' + ($invalidName) + '\' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'property name \\\'' + ($invalidName) + '\\\' is invalid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }
    if ($breakOnError) {
      out += ' break; ';
    }
    out += ' } }';
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_required(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $vSchema = 'schema' + $lvl;
  if (!$isData) {
    if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
      var $required = [];
      var arr1 = $schema;
      if (arr1) {
        var $property, i1 = -1,
          l1 = arr1.length - 1;
        while (i1 < l1) {
          $property = arr1[i1 += 1];
          var $propertySch = it.schema.properties[$property];
          if (!($propertySch && it.util.schemaHasRules($propertySch, it.RULES.all))) {
            $required[$required.length] = $property;
          }
        }
      }
    } else {
      var $required = $schema;
    }
  }
  if ($isData || $required.length) {
    var $currentErrorPath = it.errorPath,
      $loopRequired = $isData || $required.length >= it.opts.loopRequired,
      $ownProperties = it.opts.ownProperties;
    if ($breakOnError) {
      out += ' var missing' + ($lvl) + '; ';
      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
        }
        var $i = 'i' + $lvl,
          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }
        out += ' var ' + ($valid) + ' = true; ';
        if ($isData) {
          out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
        }
        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined ';
        if ($ownProperties) {
          out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
        }
        out += '; if (!' + ($valid) + ') break; } ';
        if ($isData) {
          out += '  }  ';
        }
        out += '  if (!' + ($valid) + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else { ';
      } else {
        out += ' if ( ';
        var arr2 = $required;
        if (arr2) {
          var $propertyKey, $i = -1,
            l2 = arr2.length - 1;
          while ($i < l2) {
            $propertyKey = arr2[$i += 1];
            if ($i) {
              out += ' || ';
            }
            var $prop = it.util.getProperty($propertyKey),
              $useData = $data + $prop;
            out += ' ( ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
          }
        }
        out += ') {  ';
        var $propertyPath = 'missing' + $lvl,
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
        }
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else { ';
      }
    } else {
      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
        }
        var $i = 'i' + $lvl,
          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }
        if ($isData) {
          out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
        }
        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined ';
        if ($ownProperties) {
          out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
        }
        out += ') {  var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
        if ($isData) {
          out += '  }  ';
        }
      } else {
        var arr3 = $required;
        if (arr3) {
          var $propertyKey, i3 = -1,
            l3 = arr3.length - 1;
          while (i3 < l3) {
            $propertyKey = arr3[i3 += 1];
            var $prop = it.util.getProperty($propertyKey),
              $missingProperty = it.util.escapeQuotes($propertyKey),
              $useData = $data + $prop;
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
            }
            out += ' if ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
          }
        }
      }
    }
    it.errorPath = $currentErrorPath;
  } else if ($breakOnError) {
    out += ' if (true) {';
  }
  return out;
}


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_uniqueItems(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if (($schema || $isData) && it.opts.uniqueItems !== false) {
    if ($isData) {
      out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
    }
    out += ' var i = ' + ($data) + '.length , ' + ($valid) + ' = true , j; if (i > 1) { ';
    var $itemType = it.schema.items && it.schema.items.type;
    if (!$itemType || $itemType == 'object' || $itemType == 'array') {
      out += ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } ';
    } else {
      out += ' var itemIndices = {}, item; for (;i--;) { var item = ' + ($data) + '[i]; if (typeof item != \'' + ($itemType) + '\') continue; if (itemIndices[item] !== undefined) { ' + ($valid) + ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
    }
    out += ' } ';
    if ($isData) {
      out += '  }  ';
    }
    out += ' if (!' + ($valid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }
  return out;
}


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEYWORDS = [
  'multipleOf',
  'maximum',
  'exclusiveMaximum',
  'minimum',
  'exclusiveMinimum',
  'maxLength',
  'minLength',
  'pattern',
  'additionalItems',
  'maxItems',
  'minItems',
  'uniqueItems',
  'maxProperties',
  'minProperties',
  'required',
  'additionalProperties',
  'enum',
  'format',
  'const'
];

module.exports = function (metaSchema, keywordsJsonPointers) {
  for (var i=0; i<keywordsJsonPointers.length; i++) {
    metaSchema = JSON.parse(JSON.stringify(metaSchema));
    var segments = keywordsJsonPointers[i].split('/');
    var keywords = metaSchema;
    var j;
    for (j=1; j<segments.length; j++)
      keywords = keywords[segments[j]];

    for (j=0; j<KEYWORDS.length; j++) {
      var key = KEYWORDS[j];
      var schema = keywords[key];
      if (schema) {
        keywords[key] = {
          anyOf: [
            schema,
            { $ref: 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#' }
          ]
        };
      }
    }
  }

  return metaSchema;
};


/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MissingRefError = __webpack_require__(288).MissingRef;

module.exports = compileAsync;


/**
 * Creates validating function for passed schema with asynchronous loading of missing schemas.
 * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
 * @this  Ajv
 * @param {Object}   schema schema object
 * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
 * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
 * @return {Promise} promise that resolves with a validating function.
 */
function compileAsync(schema, meta, callback) {
  /* eslint no-shadow: 0 */
  /* global Promise */
  /* jshint validthis: true */
  var self = this;
  if (typeof this._opts.loadSchema != 'function')
    throw new Error('options.loadSchema should be a function');

  if (typeof meta == 'function') {
    callback = meta;
    meta = undefined;
  }

  var p = loadMetaSchemaOf(schema).then(function () {
    var schemaObj = self._addSchema(schema, undefined, meta);
    return schemaObj.validate || _compileAsync(schemaObj);
  });

  if (callback) {
    p.then(
      function(v) { callback(null, v); },
      callback
    );
  }

  return p;


  function loadMetaSchemaOf(sch) {
    var $schema = sch.$schema;
    return $schema && !self.getSchema($schema)
            ? compileAsync.call(self, { $ref: $schema }, true)
            : Promise.resolve();
  }


  function _compileAsync(schemaObj) {
    try { return self._compile(schemaObj); }
    catch(e) {
      if (e instanceof MissingRefError) return loadMissingSchema(e);
      throw e;
    }


    function loadMissingSchema(e) {
      var ref = e.missingSchema;
      if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');

      var schemaPromise = self._loadingSchemas[ref];
      if (!schemaPromise) {
        schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
        schemaPromise.then(removePromise, removePromise);
      }

      return schemaPromise.then(function (sch) {
        if (!added(ref)) {
          return loadMetaSchemaOf(sch).then(function () {
            if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
          });
        }
      }).then(function() {
        return _compileAsync(schemaObj);
      });

      function removePromise() {
        delete self._loadingSchemas[ref];
      }

      function added(ref) {
        return self._refs[ref] || self._schemas[ref];
      }
    }
  }
}


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;
var customRuleCode = __webpack_require__(391);

module.exports = {
  add: addKeyword,
  get: getKeyword,
  remove: removeKeyword
};

/**
 * Define custom keyword
 * @this  Ajv
 * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
 * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
 * @return {Ajv} this for method chaining
 */
function addKeyword(keyword, definition) {
  /* jshint validthis: true */
  /* eslint no-shadow: 0 */
  var RULES = this.RULES;

  if (RULES.keywords[keyword])
    throw new Error('Keyword ' + keyword + ' is already defined');

  if (!IDENTIFIER.test(keyword))
    throw new Error('Keyword ' + keyword + ' is not a valid identifier');

  if (definition) {
    if (definition.macro && definition.valid !== undefined)
      throw new Error('"valid" option cannot be used with macro keywords');

    var dataType = definition.type;
    if (Array.isArray(dataType)) {
      var i, len = dataType.length;
      for (i=0; i<len; i++) checkDataType(dataType[i]);
      for (i=0; i<len; i++) _addRule(keyword, dataType[i], definition);
    } else {
      if (dataType) checkDataType(dataType);
      _addRule(keyword, dataType, definition);
    }

    var $data = definition.$data === true && this._opts.$data;
    if ($data && !definition.validate)
      throw new Error('$data support: "validate" function is not defined');

    var metaSchema = definition.metaSchema;
    if (metaSchema) {
      if ($data) {
        metaSchema = {
          anyOf: [
            metaSchema,
            { '$ref': 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#' }
          ]
        };
      }
      definition.validateSchema = this.compile(metaSchema, true);
    }
  }

  RULES.keywords[keyword] = RULES.all[keyword] = true;


  function _addRule(keyword, dataType, definition) {
    var ruleGroup;
    for (var i=0; i<RULES.length; i++) {
      var rg = RULES[i];
      if (rg.type == dataType) {
        ruleGroup = rg;
        break;
      }
    }

    if (!ruleGroup) {
      ruleGroup = { type: dataType, rules: [] };
      RULES.push(ruleGroup);
    }

    var rule = {
      keyword: keyword,
      definition: definition,
      custom: true,
      code: customRuleCode,
      implements: definition.implements
    };
    ruleGroup.rules.push(rule);
    RULES.custom[keyword] = rule;
  }


  function checkDataType(dataType) {
    if (!RULES.types[dataType]) throw new Error('Unknown type ' + dataType);
  }

  return this;
}


/**
 * Get keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
 */
function getKeyword(keyword) {
  /* jshint validthis: true */
  var rule = this.RULES.custom[keyword];
  return rule ? rule.definition : this.RULES.keywords[keyword] || false;
}


/**
 * Remove keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 * @return {Ajv} this for method chaining
 */
function removeKeyword(keyword) {
  /* jshint validthis: true */
  var RULES = this.RULES;
  delete RULES.keywords[keyword];
  delete RULES.all[keyword];
  delete RULES.custom[keyword];
  for (var i=0; i<RULES.length; i++) {
    var rules = RULES[i].rules;
    for (var j=0; j<rules.length; j++) {
      if (rules[j].keyword == keyword) {
        rules.splice(j, 1);
        break;
      }
    }
  }
  return this;
}


/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_custom(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $rule = this,
    $definition = 'definition' + $lvl,
    $rDef = $rule.definition,
    $closingBraces = '';
  var $compile, $inline, $macro, $ruleValidate, $validateCode;
  if ($isData && $rDef.$data) {
    $validateCode = 'keywordValidate' + $lvl;
    var $validateSchema = $rDef.validateSchema;
    out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
  } else {
    $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
    if (!$ruleValidate) return;
    $schemaValue = 'validate.schema' + $schemaPath;
    $validateCode = $ruleValidate.code;
    $compile = $rDef.compile;
    $inline = $rDef.inline;
    $macro = $rDef.macro;
  }
  var $ruleErrs = $validateCode + '.errors',
    $i = 'i' + $lvl,
    $ruleErr = 'ruleErr' + $lvl,
    $asyncKeyword = $rDef.async;
  if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
  if (!($inline || $macro)) {
    out += '' + ($ruleErrs) + ' = null;';
  }
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if ($isData && $rDef.$data) {
    $closingBraces += '}';
    out += ' if (' + ($schemaValue) + ' === undefined) { ' + ($valid) + ' = true; } else { ';
    if ($validateSchema) {
      $closingBraces += '}';
      out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') { ';
    }
  }
  if ($inline) {
    if ($rDef.statements) {
      out += ' ' + ($ruleValidate.validate) + ' ';
    } else {
      out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
    }
  } else if ($macro) {
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    $it.schema = $ruleValidate.validate;
    $it.schemaPath = '';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($code);
  } else {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    out += '  ' + ($validateCode) + '.call( ';
    if (it.opts.passContext) {
      out += 'this';
    } else {
      out += 'self';
    }
    if ($compile || $rDef.schema === false) {
      out += ' , ' + ($data) + ' ';
    } else {
      out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
    }
    out += ' , (dataPath || \'\')';
    if (it.errorPath != '""') {
      out += ' + ' + (it.errorPath);
    }
    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
    var def_callRuleValidate = out;
    out = $$outStack.pop();
    if ($rDef.errors === false) {
      out += ' ' + ($valid) + ' = ';
      if ($asyncKeyword) {
        out += 'await ';
      }
      out += '' + (def_callRuleValidate) + '; ';
    } else {
      if ($asyncKeyword) {
        $ruleErrs = 'customErrors' + $lvl;
        out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = await ' + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
      } else {
        out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
      }
    }
  }
  if ($rDef.modifying) {
    out += ' if (' + ($parentData) + ') ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
  }
  out += '' + ($closingBraces);
  if ($rDef.valid) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  } else {
    out += ' if ( ';
    if ($rDef.valid === undefined) {
      out += ' !';
      if ($macro) {
        out += '' + ($nextValid);
      } else {
        out += '' + ($valid);
      }
    } else {
      out += ' ' + (!$rDef.valid) + ' ';
    }
    out += ') { ';
    $errorKeyword = $rule.keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    var def_customError = out;
    out = $$outStack.pop();
    if ($inline) {
      if ($rDef.errors) {
        if ($rDef.errors != 'full') {
          out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } ';
        }
      } else {
        if ($rDef.errors === false) {
          out += ' ' + (def_customError) + ' ';
        } else {
          out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } } ';
        }
      }
    } else if ($macro) {
      out += '   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
    } else {
      if ($rDef.errors === false) {
        out += ' ' + (def_customError) + ' ';
      } else {
        out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
        if (it.opts.verbose) {
          out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
        }
        out += ' } } else { ' + (def_customError) + ' } ';
      }
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
  }
  return out;
}


/***/ }),
/* 392 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",
	"description": "Meta-schema for $data reference (JSON Schema extension proposal)",
	"type": "object",
	"required": [
		"$data"
	],
	"properties": {
		"$data": {
			"type": "string",
			"anyOf": [
				{
					"format": "relative-json-pointer"
				},
				{
					"format": "json-pointer"
				}
			]
		}
	},
	"additionalProperties": false
};

/***/ }),
/* 393 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-07/schema#",
	"$id": "http://json-schema.org/draft-07/schema#",
	"title": "Core schema meta-schema",
	"definitions": {
		"schemaArray": {
			"type": "array",
			"minItems": 1,
			"items": {
				"$ref": "#"
			}
		},
		"nonNegativeInteger": {
			"type": "integer",
			"minimum": 0
		},
		"nonNegativeIntegerDefault0": {
			"allOf": [
				{
					"$ref": "#/definitions/nonNegativeInteger"
				},
				{
					"default": 0
				}
			]
		},
		"simpleTypes": {
			"enum": [
				"array",
				"boolean",
				"integer",
				"null",
				"number",
				"object",
				"string"
			]
		},
		"stringArray": {
			"type": "array",
			"items": {
				"type": "string"
			},
			"uniqueItems": true,
			"default": []
		}
	},
	"type": [
		"object",
		"boolean"
	],
	"properties": {
		"$id": {
			"type": "string",
			"format": "uri-reference"
		},
		"$schema": {
			"type": "string",
			"format": "uri"
		},
		"$ref": {
			"type": "string",
			"format": "uri-reference"
		},
		"$comment": {
			"type": "string"
		},
		"title": {
			"type": "string"
		},
		"description": {
			"type": "string"
		},
		"default": true,
		"readOnly": {
			"type": "boolean",
			"default": false
		},
		"examples": {
			"type": "array",
			"items": true
		},
		"multipleOf": {
			"type": "number",
			"exclusiveMinimum": 0
		},
		"maximum": {
			"type": "number"
		},
		"exclusiveMaximum": {
			"type": "number"
		},
		"minimum": {
			"type": "number"
		},
		"exclusiveMinimum": {
			"type": "number"
		},
		"maxLength": {
			"$ref": "#/definitions/nonNegativeInteger"
		},
		"minLength": {
			"$ref": "#/definitions/nonNegativeIntegerDefault0"
		},
		"pattern": {
			"type": "string",
			"format": "regex"
		},
		"additionalItems": {
			"$ref": "#"
		},
		"items": {
			"anyOf": [
				{
					"$ref": "#"
				},
				{
					"$ref": "#/definitions/schemaArray"
				}
			],
			"default": true
		},
		"maxItems": {
			"$ref": "#/definitions/nonNegativeInteger"
		},
		"minItems": {
			"$ref": "#/definitions/nonNegativeIntegerDefault0"
		},
		"uniqueItems": {
			"type": "boolean",
			"default": false
		},
		"contains": {
			"$ref": "#"
		},
		"maxProperties": {
			"$ref": "#/definitions/nonNegativeInteger"
		},
		"minProperties": {
			"$ref": "#/definitions/nonNegativeIntegerDefault0"
		},
		"required": {
			"$ref": "#/definitions/stringArray"
		},
		"additionalProperties": {
			"$ref": "#"
		},
		"definitions": {
			"type": "object",
			"additionalProperties": {
				"$ref": "#"
			},
			"default": {}
		},
		"properties": {
			"type": "object",
			"additionalProperties": {
				"$ref": "#"
			},
			"default": {}
		},
		"patternProperties": {
			"type": "object",
			"additionalProperties": {
				"$ref": "#"
			},
			"propertyNames": {
				"format": "regex"
			},
			"default": {}
		},
		"dependencies": {
			"type": "object",
			"additionalProperties": {
				"anyOf": [
					{
						"$ref": "#"
					},
					{
						"$ref": "#/definitions/stringArray"
					}
				]
			}
		},
		"propertyNames": {
			"$ref": "#"
		},
		"const": true,
		"enum": {
			"type": "array",
			"items": true,
			"minItems": 1,
			"uniqueItems": true
		},
		"type": {
			"anyOf": [
				{
					"$ref": "#/definitions/simpleTypes"
				},
				{
					"type": "array",
					"items": {
						"$ref": "#/definitions/simpleTypes"
					},
					"minItems": 1,
					"uniqueItems": true
				}
			]
		},
		"format": {
			"type": "string"
		},
		"contentMediaType": {
			"type": "string"
		},
		"contentEncoding": {
			"type": "string"
		},
		"if": {
			"$ref": "#"
		},
		"then": {
			"$ref": "#"
		},
		"else": {
			"$ref": "#"
		},
		"allOf": {
			"$ref": "#/definitions/schemaArray"
		},
		"anyOf": {
			"$ref": "#/definitions/schemaArray"
		},
		"oneOf": {
			"$ref": "#/definitions/schemaArray"
		},
		"not": {
			"$ref": "#"
		}
	},
	"default": true
};

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEYWORDS = __webpack_require__(395);

module.exports = defineKeywords;


/**
 * Defines one or several keywords in ajv instance
 * @param  {Ajv} ajv validator instance
 * @param  {String|Array<String>|undefined} keyword keyword(s) to define
 * @return {Ajv} ajv instance (for chaining)
 */
function defineKeywords(ajv, keyword) {
  if (Array.isArray(keyword)) {
    for (var i=0; i<keyword.length; i++)
      get(keyword[i])(ajv);
    return ajv;
  }
  if (keyword) {
    get(keyword)(ajv);
    return ajv;
  }
  for (keyword in KEYWORDS) get(keyword)(ajv);
  return ajv;
}


defineKeywords.get = get;

function get(keyword) {
  var defFunc = KEYWORDS[keyword];
  if (!defFunc) throw new Error('Unknown keyword ' + keyword);
  return defFunc;
}


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'instanceof': __webpack_require__(396),
  range: __webpack_require__(397),
  regexp: __webpack_require__(398),
  'typeof': __webpack_require__(399),
  dynamicDefaults: __webpack_require__(400),
  prohibited: __webpack_require__(401),
  uniqueItemProperties: __webpack_require__(402),
  deepProperties: __webpack_require__(403),
  deepRequired: __webpack_require__(404),
  formatMinimum: __webpack_require__(405),
  formatMaximum: __webpack_require__(407),
  patternRequired: __webpack_require__(408),
  'switch': __webpack_require__(410),
  select: __webpack_require__(412)
};


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var CONSTRUCTORS = {
  Object: Object,
  Array: Array,
  Function: Function,
  Number: Number,
  String: String,
  Date: Date,
  RegExp: RegExp
};

module.exports = function defFunc(ajv) {
  /* istanbul ignore else */
  if (typeof Buffer != 'undefined')
    CONSTRUCTORS.Buffer = Buffer;

  /* istanbul ignore else */
  if (typeof Promise != 'undefined')
    CONSTRUCTORS.Promise = Promise;

  defFunc.definition = {
    compile: function (schema) {
      if (typeof schema == 'string') {
        var Constructor = getConstructor(schema);
        return function (data) {
          return data instanceof Constructor;
        };
      }

      var constructors = schema.map(getConstructor);
      return function (data) {
        for (var i=0; i<constructors.length; i++)
          if (data instanceof constructors[i]) return true;
        return false;
      };
    },
    CONSTRUCTORS: CONSTRUCTORS,
    metaSchema: {
      anyOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' }
        }
      ]
    }
  };

  ajv.addKeyword('instanceof', defFunc.definition);
  return ajv;

  function getConstructor(c) {
    var Constructor = CONSTRUCTORS[c];
    if (Constructor) return Constructor;
    throw new Error('invalid "instanceof" keyword value ' + c);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23).Buffer))

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'number',
    macro: function (schema, parentSchema) {
      var min = schema[0]
        , max = schema[1]
        , exclusive = parentSchema.exclusiveRange;

      validateRangeSchema(min, max, exclusive);

      return exclusive === true
              ? {exclusiveMinimum: min, exclusiveMaximum: max}
              : {minimum: min, maximum: max};
    },
    metaSchema: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: { type: 'number' }
    }
  };

  ajv.addKeyword('range', defFunc.definition);
  ajv.addKeyword('exclusiveRange');
  return ajv;

  function validateRangeSchema(min, max, exclusive) {
    if (exclusive !== undefined && typeof exclusive != 'boolean')
      throw new Error('Invalid schema for exclusiveRange keyword, should be boolean');

    if (min > max || (exclusive && min == max))
      throw new Error('There are no numbers in range');
  }
};


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'string',
    inline: function (it, keyword, schema) {
      return getRegExp() + '.test(data' + (it.dataLevel || '') + ')';

      function getRegExp() {
        try {
          if (typeof schema == 'object')
            return new RegExp(schema.pattern, schema.flags);

          var rx = schema.match(/^\/(.*)\/([gimy]*)$/);
          if (rx) return new RegExp(rx[1], rx[2]);
          throw new Error('cannot parse string into RegExp');
        } catch(e) {
          console.error('regular expression', schema, 'is invalid');
          throw e;
        }
      }
    },
    metaSchema: {
      type: ['string', 'object'],
      properties: {
        pattern: { type: 'string' },
        flags: { type: 'string' }
      },
      required: ['pattern'],
      additionalProperties: false
    }
  };

  ajv.addKeyword('regexp', defFunc.definition);
  return ajv;
};


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KNOWN_TYPES = ['undefined', 'string', 'number', 'object', 'function', 'boolean', 'symbol'];

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    inline: function (it, keyword, schema) {
      var data = 'data' + (it.dataLevel || '');
      if (typeof schema == 'string') return 'typeof ' + data + ' == "' + schema + '"';
      schema = 'validate.schema' + it.schemaPath + '.' + keyword;
      return schema + '.indexOf(typeof ' + data + ') >= 0';
    },
    metaSchema: {
      anyOf: [
        {
          type: 'string',
          enum: KNOWN_TYPES
        },
        {
          type: 'array',
          items: {
            type: 'string',
            enum: KNOWN_TYPES
          }
        }
      ]
    }
  };

  ajv.addKeyword('typeof', defFunc.definition);
  return ajv;
};


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sequences = {};

var DEFAULTS = {
  timestamp: function() { return Date.now(); },
  datetime: function() { return (new Date).toISOString(); },
  date: function() { return (new Date).toISOString().slice(0, 10); },
  time: function() { return (new Date).toISOString().slice(11); },
  random: function() { return Math.random(); },
  randomint: function (args) {
    var limit = args && args.max || 2;
    return function() { return Math.floor(Math.random() * limit); };
  },
  seq: function (args) {
    var name = args && args.name || '';
    sequences[name] = sequences[name] || 0;
    return function() { return sequences[name]++; };
  }
};

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    compile: function (schema, parentSchema, it) {
      var funcs = {};

      for (var key in schema) {
        var d = schema[key];
        var func = getDefault(typeof d == 'string' ? d : d.func);
        funcs[key] = func.length ? func(d.args) : func;
      }

      return it.opts.useDefaults && !it.compositeRule
              ? assignDefaults
              : noop;

      function assignDefaults(data) {
        for (var prop in schema)
          if (data[prop] === undefined) data[prop] = funcs[prop]();
        return true;
      }

      function noop() { return true; }
    },
    DEFAULTS: DEFAULTS,
    metaSchema: {
      type: 'object',
      additionalProperties: {
        type: ['string', 'object'],
        additionalProperties: false,
        required: ['func', 'args'],
        properties: {
          func: { type: 'string' },
          args: { type: 'object' }
        }
      }
    }
  };

  ajv.addKeyword('dynamicDefaults', defFunc.definition);
  return ajv;

  function getDefault(d) {
    var def = DEFAULTS[d];
    if (def) return def;
    throw new Error('invalid "dynamicDefaults" keyword property value: ' + d);
  }
};


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function (schema) {
      if (schema.length == 0) return {};
      if (schema.length == 1) return { not: { required: schema } };
      var schemas = schema.map(function (prop) {
        return { required: [prop] };
      });
      return { not: { anyOf: schemas } };
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  };

  ajv.addKeyword('prohibited', defFunc.definition);
  return ajv;
};



/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'array',
    compile: function(keys, parentSchema, it) {
      var equal = it.util.equal;
      return function(data) {
        if (data.length > 1) {
          for (var k=0; k < keys.length; k++) {
            var key = keys[k];
            for (var i = data.length; i--;) {
              if (typeof data[i] != 'object') continue;
              for (var j = i; j--;) {
                if (typeof data[j] == 'object' && equal(data[i][key], data[j][key]))
                  return false;
              }
            }
          }
        }
        return true;
      };
    },
    metaSchema: {
      type: 'array',
      items: {type: 'string'}
    }
  };

  ajv.addKeyword('uniqueItemProperties', defFunc.definition);
  return ajv;
};


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(289);

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function (schema) {
      var schemas = [];
      for (var pointer in schema)
        schemas.push(getSchema(pointer, schema[pointer]));
      return { 'allOf': schemas };
    },
    metaSchema: {
      type: 'object',
      propertyNames: {
        type: 'string',
        format: 'json-pointer'
      },
      additionalProperties: util.metaSchemaRef(ajv)
    }
  };

  ajv.addKeyword('deepProperties', defFunc.definition);
  return ajv;
};


function getSchema(jsonPointer, schema) {
  var segments = jsonPointer.split('/');
  var rootSchema = {};
  var pointerSchema = rootSchema;
  for (var i=1; i<segments.length; i++) {
    var segment = segments[i];
    var isLast = i == segments.length - 1;
    segment = unescapeJsonPointer(segment);
    var properties = pointerSchema.properties = {};
    var items = undefined;
    if (/[0-9]+/.test(segment)) {
      var count = +segment;
      items = pointerSchema.items = [];
      while (count--) items.push({});
    }
    pointerSchema = isLast ? schema : {};
    properties[segment] = pointerSchema;
    if (items) items.push(pointerSchema);
  }
  return rootSchema;
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    inline: function (it, keyword, schema) {
      var expr = '';
      for (var i=0; i<schema.length; i++) {
        if (i) expr += ' && ';
        expr += '(' + getData(schema[i], it.dataLevel) + ' !== undefined)';
      }
      return expr;
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        format: 'json-pointer'
      }
    }
  };

  ajv.addKeyword('deepRequired', defFunc.definition);
  return ajv;
};


function getData(jsonPointer, lvl) {
  var data = 'data' + (lvl || '');
  if (!jsonPointer) return data;

  var expr = data;
  var segments = jsonPointer.split('/');
  for (var i=1; i<segments.length; i++) {
    var segment = segments[i];
    data += getProperty(unescapeJsonPointer(segment));
    expr += ' && ' + data;
  }
  return expr;
}


var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var INTEGER = /^[0-9]+$/;
var SINGLE_QUOTE = /'|\\/g;
function getProperty(key) {
  return INTEGER.test(key)
          ? '[' + key + ']'
          : IDENTIFIER.test(key)
            ? '.' + key
            : "['" + key.replace(SINGLE_QUOTE, '\\$&') + "']";
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(324)('Minimum');


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__formatLimit(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  out += 'var ' + ($valid) + ' = undefined;';
  if (it.opts.format === false) {
    out += ' ' + ($valid) + ' = true; ';
    return out;
  }
  var $schemaFormat = it.schema.format,
    $isDataFormat = it.opts.$data && $schemaFormat.$data,
    $closingBraces = '';
  if ($isDataFormat) {
    var $schemaValueFormat = it.util.getData($schemaFormat.$data, $dataLvl, it.dataPathArr),
      $format = 'format' + $lvl,
      $compare = 'compare' + $lvl;
    out += ' var ' + ($format) + ' = formats[' + ($schemaValueFormat) + '] , ' + ($compare) + ' = ' + ($format) + ' && ' + ($format) + '.compare;';
  } else {
    var $format = it.formats[$schemaFormat];
    if (!($format && $format.compare)) {
      out += '  ' + ($valid) + ' = true; ';
      return out;
    }
    var $compare = 'formats' + it.util.getProperty($schemaFormat) + '.compare';
  }
  var $isMax = $keyword == 'formatMaximum',
    $exclusiveKeyword = 'formatExclusive' + ($isMax ? 'Maximum' : 'Minimum'),
    $schemaExcl = it.schema[$exclusiveKeyword],
    $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
    $op = $isMax ? '<' : '>',
    $result = 'result' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
      $exclusive = 'exclusive' + $lvl,
      $opExpr = 'op' + $lvl,
      $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' if (typeof ' + ($schemaValueExcl) + ' != \'boolean\' && ' + ($schemaValueExcl) + ' !== undefined) { ' + ($valid) + ' = false; ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_formatExclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }  ';
    if ($breakOnError) {
      $closingBraces += '}';
      out += ' else { ';
    }
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; var ' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true; if (' + ($valid) + ' === undefined) { ' + ($valid) + ' = ' + ($exclusive) + ' ? ' + ($result) + ' ' + ($op) + ' 0 : ' + ($result) + ' ' + ($op) + '= 0; } if (!' + ($valid) + ') var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
  } else {
    var $exclusive = $schemaExcl === true,
      $opStr = $op;
    if (!$exclusive) $opStr += '=';
    var $opExpr = '\'' + $opStr + '\'';
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; if (' + ($valid) + ' === undefined) ' + ($valid) + ' = ' + ($result) + ' ' + ($op);
    if (!$exclusive) {
      out += '=';
    }
    out += ' 0;';
  }
  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_formatLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' , exclusive: ' + ($exclusive) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + ($opStr) + ' "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '}';
  return out;
}


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(324)('Maximum');


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    inline: __webpack_require__(409),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        format: 'regex'
      },
      uniqueItems: true
    }
  };

  ajv.addKeyword('patternRequired', defFunc.definition);
  return ajv;
};


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_patternRequired(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $key = 'key' + $lvl,
    $idx = 'idx' + $lvl,
    $matched = 'patternMatched' + $lvl,
    $dataProperties = 'dataProperties' + $lvl,
    $closingBraces = '',
    $ownProperties = it.opts.ownProperties;
  out += 'var ' + ($valid) + ' = true;';
  if ($ownProperties) {
    out += ' var ' + ($dataProperties) + ' = undefined;';
  }
  var arr1 = $schema;
  if (arr1) {
    var $pProperty, i1 = -1,
      l1 = arr1.length - 1;
    while (i1 < l1) {
      $pProperty = arr1[i1 += 1];
      out += ' var ' + ($matched) + ' = false;  ';
      if ($ownProperties) {
        out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
      } else {
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
      }
      out += ' ' + ($matched) + ' = ' + (it.usePattern($pProperty)) + '.test(' + ($key) + '); if (' + ($matched) + ') break; } ';
      var $missingPattern = it.util.escapeQuotes($pProperty);
      out += ' if (!' + ($matched) + ') { ' + ($valid) + ' = false;  var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('patternRequired') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingPattern: \'' + ($missingPattern) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should have property matching pattern \\\'' + ($missingPattern) + '\\\'\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ';
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }
  out += '' + ($closingBraces);
  return out;
}


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(289);

module.exports = function defFunc(ajv) {
  if (ajv.RULES.keywords.switch && ajv.RULES.keywords.if) return;

  var metaSchemaRef = util.metaSchemaRef(ajv);

  defFunc.definition = {
    inline: __webpack_require__(411),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        required: [ 'then' ],
        properties: {
          'if': metaSchemaRef,
          'then': {
            anyOf: [
              { type: 'boolean' },
              metaSchemaRef
            ]
          },
          'continue': { type: 'boolean' }
        },
        additionalProperties: false,
        dependencies: {
          'continue': [ 'if' ]
        }
      }
    }
  };

  ajv.addKeyword('switch', defFunc.definition);
  return ajv;
};


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_switch(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $ifPassed = 'ifPassed' + it.level,
    $currentBaseId = $it.baseId,
    $shouldContinue;
  out += 'var ' + ($ifPassed) + ';';
  var arr1 = $schema;
  if (arr1) {
    var $sch, $caseIndex = -1,
      l1 = arr1.length - 1;
    while ($caseIndex < l1) {
      $sch = arr1[$caseIndex += 1];
      if ($caseIndex && !$shouldContinue) {
        out += ' if (!' + ($ifPassed) + ') { ';
        $closingBraces += '}';
      }
      if ($sch.if && it.util.schemaHasRules($sch.if, it.RULES.all)) {
        out += ' var ' + ($errs) + ' = errors;   ';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.createErrors = false;
        $it.schema = $sch.if;
        $it.schemaPath = $schemaPath + '[' + $caseIndex + '].if';
        $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/if';
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        $it.createErrors = true;
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' ' + ($ifPassed) + ' = ' + ($nextValid) + '; if (' + ($ifPassed) + ') {  ';
        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { caseIndex: ' + ($caseIndex) + ' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }
          out += ' var ' + ($nextValid) + ' = ' + ($sch.then) + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        }
        out += '  } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } } ';
      } else {
        out += ' ' + ($ifPassed) + ' = true;  ';
        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { caseIndex: ' + ($caseIndex) + ' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }
          out += ' var ' + ($nextValid) + ' = ' + ($sch.then) + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        }
      }
      $shouldContinue = $sch.continue
    }
  }
  out += '' + ($closingBraces) + 'var ' + ($valid) + ' = ' + ($nextValid) + '; ';
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(289);

module.exports = function defFunc(ajv) {
  if (!ajv._opts.$data) {
    console.warn('keyword select requires $data option');
    return ajv;
  }
  var metaSchemaRef = util.metaSchemaRef(ajv);
  var compiledCaseSchemas = [];

  defFunc.definition = {
    validate: function v(schema, data, parentSchema) {
      if (parentSchema.selectCases === undefined)
        throw new Error('keyword "selectCases" is absent');
      var compiled = getCompiledSchemas(parentSchema, false);
      var validate = compiled.cases[schema];
      if (validate === undefined) validate = compiled.default;
      if (typeof validate == 'boolean') return validate;
      var valid = validate(data);
      if (!valid) v.errors = validate.errors;
      return valid;
    },
    $data: true,
    metaSchema: { type: ['string', 'number', 'boolean', 'null'] }
  };

  ajv.addKeyword('select', defFunc.definition);
  ajv.addKeyword('selectCases', {
    compile: function (schemas, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);
      for (var value in schemas)
        compiled.cases[value] = compileOrBoolean(schemas[value]);
      return function() { return true; };
    },
    valid: true,
    metaSchema: {
      type: 'object',
      additionalProperties: metaSchemaRef
    }
  });
  ajv.addKeyword('selectDefault', {
    compile: function (schema, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);
      compiled.default = compileOrBoolean(schema);
      return function() { return true; };
    },
    valid: true,
    metaSchema: metaSchemaRef
  });
  return ajv;


  function getCompiledSchemas(parentSchema, create) {
    var compiled;
    compiledCaseSchemas.some(function (c) {
      if (c.parentSchema === parentSchema) {
        compiled = c;
        return true;
      }
    });
    if (!compiled && create !== false) {
      compiled = {
        parentSchema: parentSchema,
        cases: {},
        default: true
      };
      compiledCaseSchemas.push(compiled);
    }
    return compiled;
  }

  function compileOrBoolean(schema) {
    return typeof schema == 'boolean'
            ? schema
            : ajv.compile(schema);
  }
};


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _Calendar = __webpack_require__(414);

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = _Calendar2['default'];
module.exports = exports['default'];

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(291);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createReactClass = __webpack_require__(268);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _KeyCode = __webpack_require__(426);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _DateTable = __webpack_require__(427);

var _DateTable2 = _interopRequireDefault(_DateTable);

var _CalendarHeader = __webpack_require__(459);

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarFooter = __webpack_require__(464);

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

var _CalendarMixin = __webpack_require__(468);

var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);

var _CommonMixin = __webpack_require__(469);

var _CommonMixin2 = _interopRequireDefault(_CommonMixin);

var _DateInput = __webpack_require__(471);

var _DateInput2 = _interopRequireDefault(_DateInput);

var _util = __webpack_require__(270);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function goStartMonth() {
  var next = this.state.value.clone();
  next.startOf('month');
  this.setValue(next);
}

function goEndMonth() {
  var next = this.state.value.clone();
  next.endOf('month');
  this.setValue(next);
}

function goTime(direction, unit) {
  var next = this.state.value.clone();
  next.add(direction, unit);
  this.setValue(next);
}

function goMonth(direction) {
  return goTime.call(this, direction, 'months');
}

function goYear(direction) {
  return goTime.call(this, direction, 'years');
}

function goWeek(direction) {
  return goTime.call(this, direction, 'weeks');
}

function goDay(direction) {
  return goTime.call(this, direction, 'days');
}

var Calendar = (0, _createReactClass2['default'])({
  displayName: 'Calendar',

  propTypes: {
    prefixCls: _propTypes2['default'].string,
    className: _propTypes2['default'].string,
    style: _propTypes2['default'].object,
    defaultValue: _propTypes2['default'].object,
    value: _propTypes2['default'].object,
    selectedValue: _propTypes2['default'].object,
    mode: _propTypes2['default'].oneOf(['time', 'date', 'month', 'year', 'decade']),
    locale: _propTypes2['default'].object,
    showDateInput: _propTypes2['default'].bool,
    showWeekNumber: _propTypes2['default'].bool,
    showToday: _propTypes2['default'].bool,
    showOk: _propTypes2['default'].bool,
    onSelect: _propTypes2['default'].func,
    onOk: _propTypes2['default'].func,
    onKeyDown: _propTypes2['default'].func,
    timePicker: _propTypes2['default'].element,
    dateInputPlaceholder: _propTypes2['default'].any,
    onClear: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onPanelChange: _propTypes2['default'].func,
    disabledDate: _propTypes2['default'].func,
    disabledTime: _propTypes2['default'].any,
    renderFooter: _propTypes2['default'].func,
    renderSidebar: _propTypes2['default'].func
  },

  mixins: [_CommonMixin2['default'], _CalendarMixin2['default']],

  getDefaultProps: function getDefaultProps() {
    return {
      showToday: true,
      showDateInput: true,
      timePicker: null,
      onOk: noop,
      onPanelChange: noop
    };
  },
  getInitialState: function getInitialState() {
    return {
      mode: this.props.mode || 'date'
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('mode' in nextProps && this.state.mode !== nextProps.mode) {
      this.setState({ mode: nextProps.mode });
    }
  },
  onKeyDown: function onKeyDown(event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return undefined;
    }
    var keyCode = event.keyCode;
    // mac
    var ctrlKey = event.ctrlKey || event.metaKey;
    var disabledDate = this.props.disabledDate;
    var value = this.state.value;

    switch (keyCode) {
      case _KeyCode2['default'].DOWN:
        goWeek.call(this, 1);
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].UP:
        goWeek.call(this, -1);
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].LEFT:
        if (ctrlKey) {
          goYear.call(this, -1);
        } else {
          goDay.call(this, -1);
        }
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].RIGHT:
        if (ctrlKey) {
          goYear.call(this, 1);
        } else {
          goDay.call(this, 1);
        }
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].HOME:
        goStartMonth.call(this);
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].END:
        goEndMonth.call(this);
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].PAGE_DOWN:
        goMonth.call(this, 1);
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].PAGE_UP:
        goMonth.call(this, -1);
        event.preventDefault();
        return 1;
      case _KeyCode2['default'].ENTER:
        if (!disabledDate || !disabledDate(value)) {
          this.onSelect(value, {
            source: 'keyboard'
          });
        }
        event.preventDefault();
        return 1;
      default:
        this.props.onKeyDown(event);
        return 1;
    }
  },
  onClear: function onClear() {
    this.onSelect(null);
    this.props.onClear();
  },
  onOk: function onOk() {
    var selectedValue = this.state.selectedValue;

    if (this.isAllowedDate(selectedValue)) {
      this.props.onOk(selectedValue);
    }
  },
  onDateInputChange: function onDateInputChange(value) {
    this.onSelect(value, {
      source: 'dateInput'
    });
  },
  onDateTableSelect: function onDateTableSelect(value) {
    var timePicker = this.props.timePicker;
    var selectedValue = this.state.selectedValue;

    if (!selectedValue && timePicker) {
      var timePickerDefaultValue = timePicker.props.defaultValue;
      if (timePickerDefaultValue) {
        (0, _util.syncTime)(timePickerDefaultValue, value);
      }
    }
    this.onSelect(value);
  },
  onToday: function onToday() {
    var value = this.state.value;

    var now = (0, _util.getTodayTime)(value);
    this.onSelect(now, {
      source: 'todayButton'
    });
  },
  onPanelChange: function onPanelChange(value, mode) {
    var props = this.props,
        state = this.state;

    if (!('mode' in props)) {
      this.setState({ mode: mode });
    }
    props.onPanelChange(value || state.value, mode);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2['default'].findDOMNode(this);
  },
  openTimePicker: function openTimePicker() {
    this.onPanelChange(null, 'time');
  },
  closeTimePicker: function closeTimePicker() {
    this.onPanelChange(null, 'date');
  },
  render: function render() {
    var props = this.props,
        state = this.state;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        disabledDate = props.disabledDate,
        dateInputPlaceholder = props.dateInputPlaceholder,
        timePicker = props.timePicker,
        disabledTime = props.disabledTime;
    var value = state.value,
        selectedValue = state.selectedValue,
        mode = state.mode;

    var showTimePicker = mode === 'time';
    var disabledTimeConfig = showTimePicker && disabledTime && timePicker ? (0, _util.getTimeConfig)(selectedValue, disabledTime) : null;

    var timePickerEle = null;

    if (timePicker && showTimePicker) {
      var timePickerProps = (0, _extends3['default'])({
        showHour: true,
        showSecond: true,
        showMinute: true
      }, timePicker.props, disabledTimeConfig, {
        onChange: this.onDateInputChange,
        value: selectedValue,
        disabledTime: disabledTime
      });

      if (timePicker.props.defaultValue !== undefined) {
        timePickerProps.defaultOpenValue = timePicker.props.defaultValue;
      }

      timePickerEle = _react2['default'].cloneElement(timePicker, timePickerProps);
    }

    var dateInputElement = props.showDateInput ? _react2['default'].createElement(_DateInput2['default'], {
      format: this.getFormat(),
      key: 'date-input',
      value: value,
      locale: locale,
      placeholder: dateInputPlaceholder,
      showClear: true,
      disabledTime: disabledTime,
      disabledDate: disabledDate,
      onClear: this.onClear,
      prefixCls: prefixCls,
      selectedValue: selectedValue,
      onChange: this.onDateInputChange
    }) : null;
    var children = [props.renderSidebar(), _react2['default'].createElement(
      'div',
      { className: prefixCls + '-panel', key: 'panel' },
      dateInputElement,
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-date-panel' },
        _react2['default'].createElement(_CalendarHeader2['default'], {
          locale: locale,
          mode: mode,
          value: value,
          onValueChange: this.setValue,
          onPanelChange: this.onPanelChange,
          showTimePicker: showTimePicker,
          prefixCls: prefixCls
        }),
        timePicker && showTimePicker ? _react2['default'].createElement(
          'div',
          { className: prefixCls + '-time-picker' },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-time-picker-panel' },
            timePickerEle
          )
        ) : null,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2['default'].createElement(_DateTable2['default'], {
            locale: locale,
            value: value,
            selectedValue: selectedValue,
            prefixCls: prefixCls,
            dateRender: props.dateRender,
            onSelect: this.onDateTableSelect,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          })
        ),
        _react2['default'].createElement(_CalendarFooter2['default'], {
          showOk: props.showOk,
          renderFooter: props.renderFooter,
          locale: locale,
          prefixCls: prefixCls,
          showToday: props.showToday,
          disabledTime: disabledTime,
          showTimePicker: showTimePicker,
          showDateInput: props.showDateInput,
          timePicker: timePicker,
          selectedValue: selectedValue,
          value: value,
          disabledDate: disabledDate,
          okDisabled: !this.isAllowedDate(selectedValue),
          onOk: this.onOk,
          onSelect: this.onSelect,
          onToday: this.onToday,
          onOpenTimePicker: this.openTimePicker,
          onCloseTimePicker: this.closeTimePicker
        })
      )
    )];

    return this.renderRoot({
      children: children,
      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
    });
  }
});

exports['default'] = Calendar;
module.exports = exports['default'];

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(416), __esModule: true };

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(417);
module.exports = __webpack_require__(262).Object.assign;


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(271);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(419) });


/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(278);
var gOPS = __webpack_require__(298);
var pIE = __webpack_require__(280);
var toObject = __webpack_require__(332);
var IObject = __webpack_require__(330);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(273)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(267);
var toLength = __webpack_require__(421);
var toAbsoluteIndex = __webpack_require__(422);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(294);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(294);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(28);

var emptyObject = __webpack_require__(29);
var _invariant = __webpack_require__(37);

if (process.env.NODE_ENV !== 'production') {
  var warning = __webpack_require__(38);
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(14);
var invariant = __webpack_require__(37);
var warning = __webpack_require__(38);
var assign = __webpack_require__(28);

var ReactPropTypesSecret = __webpack_require__(101);
var checkPropTypes = __webpack_require__(53);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(14);
var invariant = __webpack_require__(37);
var ReactPropTypesSecret = __webpack_require__(101);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;
module.exports = exports['default'];

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(274);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(275);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(276);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _DateTHead = __webpack_require__(457);

var _DateTHead2 = _interopRequireDefault(_DateTHead);

var _DateTBody = __webpack_require__(458);

var _DateTBody2 = _interopRequireDefault(_DateTBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DateTable = function (_React$Component) {
  (0, _inherits3['default'])(DateTable, _React$Component);

  function DateTable() {
    (0, _classCallCheck3['default'])(this, DateTable);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  DateTable.prototype.render = function render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    return _react2['default'].createElement(
      'table',
      { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
      _react2['default'].createElement(_DateTHead2['default'], props),
      _react2['default'].createElement(_DateTBody2['default'], props)
    );
  };

  return DateTable;
}(_react2['default'].Component);

exports['default'] = DateTable;
module.exports = exports['default'];

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(429), __esModule: true };

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(430);
__webpack_require__(436);
module.exports = __webpack_require__(303).f('iterator');


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(431)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(334)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(294);
var defined = __webpack_require__(293);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(301);
var descriptor = __webpack_require__(277);
var setToStringTag = __webpack_require__(302);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(263)(IteratorPrototype, __webpack_require__(269)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(264);
var anObject = __webpack_require__(272);
var getKeys = __webpack_require__(278);

module.exports = __webpack_require__(266) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(259).document;
module.exports = document && document.documentElement;


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(260);
var toObject = __webpack_require__(332);
var IE_PROTO = __webpack_require__(295)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(437);
var global = __webpack_require__(259);
var hide = __webpack_require__(263);
var Iterators = __webpack_require__(300);
var TO_STRING_TAG = __webpack_require__(269)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(438);
var step = __webpack_require__(439);
var Iterators = __webpack_require__(300);
var toIObject = __webpack_require__(267);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(334)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 438 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 439 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(441), __esModule: true };

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(442);
__webpack_require__(447);
__webpack_require__(448);
__webpack_require__(449);
module.exports = __webpack_require__(262).Symbol;


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(259);
var has = __webpack_require__(260);
var DESCRIPTORS = __webpack_require__(266);
var $export = __webpack_require__(271);
var redefine = __webpack_require__(335);
var META = __webpack_require__(443).KEY;
var $fails = __webpack_require__(273);
var shared = __webpack_require__(296);
var setToStringTag = __webpack_require__(302);
var uid = __webpack_require__(279);
var wks = __webpack_require__(269);
var wksExt = __webpack_require__(303);
var wksDefine = __webpack_require__(304);
var enumKeys = __webpack_require__(444);
var isArray = __webpack_require__(445);
var anObject = __webpack_require__(272);
var isObject = __webpack_require__(265);
var toIObject = __webpack_require__(267);
var toPrimitive = __webpack_require__(292);
var createDesc = __webpack_require__(277);
var _create = __webpack_require__(301);
var gOPNExt = __webpack_require__(446);
var $GOPD = __webpack_require__(337);
var $DP = __webpack_require__(264);
var $keys = __webpack_require__(278);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(336).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(280).f = $propertyIsEnumerable;
  __webpack_require__(298).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(299)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(263)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(279)('meta');
var isObject = __webpack_require__(265);
var has = __webpack_require__(260);
var setDesc = __webpack_require__(264).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(273)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(278);
var gOPS = __webpack_require__(298);
var pIE = __webpack_require__(280);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(331);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(267);
var gOPN = __webpack_require__(336).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 447 */
/***/ (function(module, exports) {



/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304)('asyncIterator');


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(304)('observable');


/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(451), __esModule: true };

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(452);
module.exports = __webpack_require__(262).Object.setPrototypeOf;


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(271);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(453).set });


/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(265);
var anObject = __webpack_require__(272);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(326)(Function.call, __webpack_require__(337).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(455), __esModule: true };

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(456);
var $Object = __webpack_require__(262).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(271);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(301) });


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(274);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(275);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(276);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _DateConstants = __webpack_require__(338);

var _DateConstants2 = _interopRequireDefault(_DateConstants);

var _moment = __webpack_require__(26);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DateTHead = function (_React$Component) {
  (0, _inherits3['default'])(DateTHead, _React$Component);

  function DateTHead() {
    (0, _classCallCheck3['default'])(this, DateTHead);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  DateTHead.prototype.render = function render() {
    var props = this.props;
    var value = props.value;
    var localeData = value.localeData();
    var prefixCls = props.prefixCls;
    var veryShortWeekdays = [];
    var weekDays = [];
    var firstDayOfWeek = localeData.firstDayOfWeek();
    var showWeekNumberEl = void 0;
    var now = (0, _moment2['default'])();
    for (var dateColIndex = 0; dateColIndex < _DateConstants2['default'].DATE_COL_COUNT; dateColIndex++) {
      var index = (firstDayOfWeek + dateColIndex) % _DateConstants2['default'].DATE_COL_COUNT;
      now.day(index);
      veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now);
      weekDays[dateColIndex] = localeData.weekdaysShort(now);
    }

    if (props.showWeekNumber) {
      showWeekNumberEl = _react2['default'].createElement(
        'th',
        {
          role: 'columnheader',
          className: prefixCls + '-column-header ' + prefixCls + '-week-number-header'
        },
        _react2['default'].createElement(
          'span',
          { className: prefixCls + '-column-header-inner' },
          'x'
        )
      );
    }
    var weekDaysEls = weekDays.map(function (day, xindex) {
      return _react2['default'].createElement(
        'th',
        {
          key: xindex,
          role: 'columnheader',
          title: day,
          className: prefixCls + '-column-header'
        },
        _react2['default'].createElement(
          'span',
          { className: prefixCls + '-column-header-inner' },
          veryShortWeekdays[xindex]
        )
      );
    });
    return _react2['default'].createElement(
      'thead',
      null,
      _react2['default'].createElement(
        'tr',
        { role: 'row' },
        showWeekNumberEl,
        weekDaysEls
      )
    );
  };

  return DateTHead;
}(_react2['default'].Component);

exports['default'] = DateTHead;
module.exports = exports['default'];

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(268);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _DateConstants = __webpack_require__(338);

var _DateConstants2 = _interopRequireDefault(_DateConstants);

var _util = __webpack_require__(270);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isSameDay(one, two) {
  return one && two && one.isSame(two, 'day');
}

function beforeCurrentMonthYear(current, today) {
  if (current.year() < today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() < today.month();
}

function afterCurrentMonthYear(current, today) {
  if (current.year() > today.year()) {
    return 1;
  }
  return current.year() === today.year() && current.month() > today.month();
}

function getIdFromDate(date) {
  return 'rc-calendar-' + date.year() + '-' + date.month() + '-' + date.date();
}

var DateTBody = (0, _createReactClass2['default'])({
  displayName: 'DateTBody',

  propTypes: {
    contentRender: _propTypes2['default'].func,
    dateRender: _propTypes2['default'].func,
    disabledDate: _propTypes2['default'].func,
    prefixCls: _propTypes2['default'].string,
    selectedValue: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    value: _propTypes2['default'].object,
    hoverValue: _propTypes2['default'].any,
    showWeekNumber: _propTypes2['default'].bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      hoverValue: []
    };
  },
  render: function render() {
    var props = this.props;
    var contentRender = props.contentRender,
        prefixCls = props.prefixCls,
        selectedValue = props.selectedValue,
        value = props.value,
        showWeekNumber = props.showWeekNumber,
        dateRender = props.dateRender,
        disabledDate = props.disabledDate,
        hoverValue = props.hoverValue;

    var iIndex = void 0;
    var jIndex = void 0;
    var current = void 0;
    var dateTable = [];
    var today = (0, _util.getTodayTime)(value);
    var cellClass = prefixCls + '-cell';
    var weekNumberCellClass = prefixCls + '-week-number-cell';
    var dateClass = prefixCls + '-date';
    var todayClass = prefixCls + '-today';
    var selectedClass = prefixCls + '-selected-day';
    var selectedDateClass = prefixCls + '-selected-date'; // do not move with mouse operation
    var selectedStartDateClass = prefixCls + '-selected-start-date';
    var selectedEndDateClass = prefixCls + '-selected-end-date';
    var inRangeClass = prefixCls + '-in-range-cell';
    var lastMonthDayClass = prefixCls + '-last-month-cell';
    var nextMonthDayClass = prefixCls + '-next-month-btn-day';
    var disabledClass = prefixCls + '-disabled-cell';
    var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
    var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
    var month1 = value.clone();
    month1.date(1);
    var day = month1.day();
    var lastMonthDiffDay = (day + 7 - value.localeData().firstDayOfWeek()) % 7;
    // calculate last month
    var lastMonth1 = month1.clone();
    lastMonth1.add(0 - lastMonthDiffDay, 'days');
    var passed = 0;
    for (iIndex = 0; iIndex < _DateConstants2['default'].DATE_ROW_COUNT; iIndex++) {
      for (jIndex = 0; jIndex < _DateConstants2['default'].DATE_COL_COUNT; jIndex++) {
        current = lastMonth1;
        if (passed) {
          current = current.clone();
          current.add(passed, 'days');
        }
        dateTable.push(current);
        passed++;
      }
    }
    var tableHtml = [];
    passed = 0;

    for (iIndex = 0; iIndex < _DateConstants2['default'].DATE_ROW_COUNT; iIndex++) {
      var _cx;

      var isCurrentWeek = void 0;
      var weekNumberCell = void 0;
      var isActiveWeek = false;
      var dateCells = [];
      if (showWeekNumber) {
        weekNumberCell = _react2['default'].createElement(
          'td',
          {
            key: dateTable[passed].week(),
            role: 'gridcell',
            className: weekNumberCellClass
          },
          dateTable[passed].week()
        );
      }
      for (jIndex = 0; jIndex < _DateConstants2['default'].DATE_COL_COUNT; jIndex++) {
        var next = null;
        var last = null;
        current = dateTable[passed];
        if (jIndex < _DateConstants2['default'].DATE_COL_COUNT - 1) {
          next = dateTable[passed + 1];
        }
        if (jIndex > 0) {
          last = dateTable[passed - 1];
        }
        var cls = cellClass;
        var disabled = false;
        var selected = false;

        if (isSameDay(current, today)) {
          cls += ' ' + todayClass;
          isCurrentWeek = true;
        }

        var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
        var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

        if (selectedValue && Array.isArray(selectedValue)) {
          var rangeValue = hoverValue.length ? hoverValue : selectedValue;
          if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
            var startValue = rangeValue[0];
            var endValue = rangeValue[1];
            if (startValue) {
              if (isSameDay(current, startValue)) {
                selected = true;
                isActiveWeek = true;
                cls += ' ' + selectedStartDateClass;
              }
            }
            if (startValue && endValue) {
              if (isSameDay(current, endValue)) {
                selected = true;
                isActiveWeek = true;
                cls += ' ' + selectedEndDateClass;
              } else if (current.isAfter(startValue, 'day') && current.isBefore(endValue, 'day')) {
                cls += ' ' + inRangeClass;
              }
            }
          }
        } else if (isSameDay(current, value)) {
          // keyboard change value, highlight works
          selected = true;
          isActiveWeek = true;
        }

        if (isSameDay(current, selectedValue)) {
          cls += ' ' + selectedDateClass;
        }

        if (isBeforeCurrentMonthYear) {
          cls += ' ' + lastMonthDayClass;
        }
        if (isAfterCurrentMonthYear) {
          cls += ' ' + nextMonthDayClass;
        }

        if (disabledDate) {
          if (disabledDate(current, value)) {
            disabled = true;

            if (!last || !disabledDate(last, value)) {
              cls += ' ' + firstDisableClass;
            }

            if (!next || !disabledDate(next, value)) {
              cls += ' ' + lastDisableClass;
            }
          }
        }

        if (selected) {
          cls += ' ' + selectedClass;
        }

        if (disabled) {
          cls += ' ' + disabledClass;
        }

        var dateHtml = void 0;
        if (dateRender) {
          dateHtml = dateRender(current, value);
        } else {
          var content = contentRender ? contentRender(current, value) : current.date();
          dateHtml = _react2['default'].createElement(
            'div',
            {
              key: getIdFromDate(current),
              className: dateClass,
              'aria-selected': selected,
              'aria-disabled': disabled
            },
            content
          );
        }

        dateCells.push(_react2['default'].createElement(
          'td',
          {
            key: passed,
            onClick: disabled ? undefined : props.onSelect.bind(null, current),
            onMouseEnter: disabled ? undefined : props.onDayHover && props.onDayHover.bind(null, current) || undefined,
            role: 'gridcell',
            title: (0, _util.getTitleString)(current), className: cls
          },
          dateHtml
        ));

        passed++;
      }

      tableHtml.push(_react2['default'].createElement(
        'tr',
        {
          key: iIndex,
          role: 'row',
          className: (0, _classnames2['default'])((_cx = {}, _cx[prefixCls + '-current-week'] = isCurrentWeek, _cx[prefixCls + '-active-week'] = isActiveWeek, _cx))
        },
        weekNumberCell,
        dateCells
      ));
    }
    return _react2['default'].createElement(
      'tbody',
      { className: prefixCls + '-tbody' },
      tableHtml
    );
  }
});

exports['default'] = DateTBody;
module.exports = exports['default'];

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(268);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapSelf = __webpack_require__(339);

var _mapSelf2 = _interopRequireDefault(_mapSelf);

var _MonthPanel = __webpack_require__(460);

var _MonthPanel2 = _interopRequireDefault(_MonthPanel);

var _YearPanel = __webpack_require__(462);

var _YearPanel2 = _interopRequireDefault(_YearPanel);

var _DecadePanel = __webpack_require__(463);

var _DecadePanel2 = _interopRequireDefault(_DecadePanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function goMonth(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'months');
  this.props.onValueChange(next);
}

function goYear(direction) {
  var next = this.props.value.clone();
  next.add(direction, 'years');
  this.props.onValueChange(next);
}

function showIf(condition, el) {
  return condition ? el : null;
}

var CalendarHeader = (0, _createReactClass2['default'])({
  displayName: 'CalendarHeader',

  propTypes: {
    prefixCls: _propTypes2['default'].string,
    value: _propTypes2['default'].object,
    onValueChange: _propTypes2['default'].func,
    showTimePicker: _propTypes2['default'].bool,
    onPanelChange: _propTypes2['default'].func,
    locale: _propTypes2['default'].object,
    enablePrev: _propTypes2['default'].any,
    enableNext: _propTypes2['default'].any,
    disabledMonth: _propTypes2['default'].func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      enableNext: 1,
      enablePrev: 1,
      onPanelChange: function onPanelChange() {},
      onValueChange: function onValueChange() {}
    };
  },
  getInitialState: function getInitialState() {
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return { yearPanelReferer: null };
  },
  onMonthSelect: function onMonthSelect(value) {
    this.props.onPanelChange(value, 'date');
    if (this.props.onMonthSelect) {
      this.props.onMonthSelect(value);
    } else {
      this.props.onValueChange(value);
    }
  },
  onYearSelect: function onYearSelect(value) {
    var referer = this.state.yearPanelReferer;
    this.setState({ yearPanelReferer: null });
    this.props.onPanelChange(value, referer);
    this.props.onValueChange(value);
  },
  onDecadeSelect: function onDecadeSelect(value) {
    this.props.onPanelChange(value, 'year');
    this.props.onValueChange(value);
  },
  monthYearElement: function monthYearElement(showTimePicker) {
    var _this = this;

    var props = this.props;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = props.value;
    var localeData = value.localeData();
    var monthBeforeYear = locale.monthBeforeYear;
    var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
    var year = _react2['default'].createElement(
      'a',
      {
        className: prefixCls + '-year-select',
        role: 'button',
        onClick: showTimePicker ? null : function () {
          return _this.showYearPanel('date');
        },
        title: locale.yearSelect
      },
      value.format(locale.yearFormat)
    );
    var month = _react2['default'].createElement(
      'a',
      {
        className: prefixCls + '-month-select',
        role: 'button',
        onClick: showTimePicker ? null : this.showMonthPanel,
        title: locale.monthSelect
      },
      localeData.monthsShort(value)
    );
    var day = void 0;
    if (showTimePicker) {
      day = _react2['default'].createElement(
        'a',
        {
          className: prefixCls + '-day-select',
          role: 'button'
        },
        value.format(locale.dayFormat)
      );
    }
    var my = [];
    if (monthBeforeYear) {
      my = [month, day, year];
    } else {
      my = [year, month, day];
    }
    return _react2['default'].createElement(
      'span',
      { className: selectClassName },
      (0, _mapSelf2['default'])(my)
    );
  },
  showMonthPanel: function showMonthPanel() {
    // null means that users' interaction doesn't change value
    this.props.onPanelChange(null, 'month');
  },
  showYearPanel: function showYearPanel(referer) {
    this.setState({ yearPanelReferer: referer });
    this.props.onPanelChange(null, 'year');
  },
  showDecadePanel: function showDecadePanel() {
    this.props.onPanelChange(null, 'decade');
  },
  render: function render() {
    var _this2 = this;

    var props = this.props;
    var prefixCls = props.prefixCls,
        locale = props.locale,
        mode = props.mode,
        value = props.value,
        showTimePicker = props.showTimePicker,
        enableNext = props.enableNext,
        enablePrev = props.enablePrev,
        disabledMonth = props.disabledMonth;


    var panel = null;
    if (mode === 'month') {
      panel = _react2['default'].createElement(_MonthPanel2['default'], {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onMonthSelect,
        onYearPanelShow: function onYearPanelShow() {
          return _this2.showYearPanel('month');
        },
        disabledDate: disabledMonth,
        cellRender: props.monthCellRender,
        contentRender: props.monthCellContentRender
      });
    }
    if (mode === 'year') {
      panel = _react2['default'].createElement(_YearPanel2['default'], {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onYearSelect,
        onDecadePanelShow: this.showDecadePanel
      });
    }
    if (mode === 'decade') {
      panel = _react2['default'].createElement(_DecadePanel2['default'], {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onDecadeSelect
      });
    }

    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-header' },
      _react2['default'].createElement(
        'div',
        { style: { position: 'relative' } },
        showIf(enablePrev && !showTimePicker, _react2['default'].createElement('a', {
          className: prefixCls + '-prev-year-btn',
          role: 'button',
          onClick: this.previousYear,
          title: locale.previousYear
        })),
        showIf(enablePrev && !showTimePicker, _react2['default'].createElement('a', {
          className: prefixCls + '-prev-month-btn',
          role: 'button',
          onClick: this.previousMonth,
          title: locale.previousMonth
        })),
        this.monthYearElement(showTimePicker),
        showIf(enableNext && !showTimePicker, _react2['default'].createElement('a', {
          className: prefixCls + '-next-month-btn',
          onClick: this.nextMonth,
          title: locale.nextMonth
        })),
        showIf(enableNext && !showTimePicker, _react2['default'].createElement('a', {
          className: prefixCls + '-next-year-btn',
          onClick: this.nextYear,
          title: locale.nextYear
        }))
      ),
      panel
    );
  }
});

exports['default'] = CalendarHeader;
module.exports = exports['default'];

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(268);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MonthTable = __webpack_require__(461);

var _MonthTable2 = _interopRequireDefault(_MonthTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function goYear(direction) {
  var next = this.state.value.clone();
  next.add(direction, 'year');
  this.setAndChangeValue(next);
}

function noop() {}

var MonthPanel = (0, _createReactClass2['default'])({
  displayName: 'MonthPanel',

  propTypes: {
    onChange: _propTypes2['default'].func,
    disabledDate: _propTypes2['default'].func,
    onSelect: _propTypes2['default'].func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onChange: noop,
      onSelect: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    // bind methods
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    this.prefixCls = props.rootPrefixCls + '-month-panel';
    return {
      value: props.value || props.defaultValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  },
  setAndChangeValue: function setAndChangeValue(value) {
    this.setValue(value);
    this.props.onChange(value);
  },
  setAndSelectValue: function setAndSelectValue(value) {
    this.setValue(value);
    this.props.onSelect(value);
  },
  setValue: function setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
  },
  render: function render() {
    var props = this.props;
    var value = this.state.value;
    var cellRender = props.cellRender;
    var contentRender = props.contentRender;
    var locale = props.locale;
    var year = value.year();
    var prefixCls = this.prefixCls;
    return _react2['default'].createElement(
      'div',
      { className: prefixCls, style: props.style },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2['default'].createElement('a', {
            className: prefixCls + '-prev-year-btn',
            role: 'button',
            onClick: this.previousYear,
            title: locale.previousYear
          }),
          _react2['default'].createElement(
            'a',
            {
              className: prefixCls + '-year-select',
              role: 'button',
              onClick: props.onYearPanelShow,
              title: locale.yearSelect
            },
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-year-select-content' },
              year
            ),
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-year-select-arrow' },
              'x'
            )
          ),
          _react2['default'].createElement('a', {
            className: prefixCls + '-next-year-btn',
            role: 'button',
            onClick: this.nextYear,
            title: locale.nextYear
          })
        ),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2['default'].createElement(_MonthTable2['default'], {
            disabledDate: props.disabledDate,
            onSelect: this.setAndSelectValue,
            locale: locale,
            value: value,
            cellRender: cellRender,
            contentRender: contentRender,
            prefixCls: prefixCls
          })
        )
      )
    );
  }
});

exports['default'] = MonthPanel;
module.exports = exports['default'];

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(274);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(275);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(276);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _index = __webpack_require__(270);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ROW = 4;
var COL = 3;

function chooseMonth(month) {
  var next = this.state.value.clone();
  next.month(month);
  this.setAndSelectValue(next);
}

function noop() {}

var MonthTable = function (_Component) {
  (0, _inherits3['default'])(MonthTable, _Component);

  function MonthTable(props) {
    (0, _classCallCheck3['default'])(this, MonthTable);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  MonthTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  };

  MonthTable.prototype.setAndSelectValue = function setAndSelectValue(value) {
    this.setState({
      value: value
    });
    this.props.onSelect(value);
  };

  MonthTable.prototype.months = function months() {
    var value = this.state.value;
    var current = value.clone();
    var months = [];
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      months[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        current.month(index);
        var content = (0, _index.getMonthName)(current);
        months[rowIndex][colIndex] = {
          value: index,
          content: content,
          title: content
        };
        index++;
      }
    }
    return months;
  };

  MonthTable.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var value = this.state.value;
    var today = (0, _index.getTodayTime)(value);
    var months = this.months();
    var currentMonth = value.month();
    var prefixCls = props.prefixCls,
        locale = props.locale,
        contentRender = props.contentRender,
        cellRender = props.cellRender;

    var monthsEls = months.map(function (month, index) {
      var tds = month.map(function (monthData) {
        var _classNameMap;

        var disabled = false;
        if (props.disabledDate) {
          var testValue = value.clone();
          testValue.month(monthData.value);
          disabled = props.disabledDate(testValue);
        }
        var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-cell-disabled'] = disabled, _classNameMap[prefixCls + '-selected-cell'] = monthData.value === currentMonth, _classNameMap[prefixCls + '-current-cell'] = today.year() === value.year() && monthData.value === today.month(), _classNameMap);
        var cellEl = void 0;
        if (cellRender) {
          var currentValue = value.clone();
          currentValue.month(monthData.value);
          cellEl = cellRender(currentValue, locale);
        } else {
          var content = void 0;
          if (contentRender) {
            var _currentValue = value.clone();
            _currentValue.month(monthData.value);
            content = contentRender(_currentValue, locale);
          } else {
            content = monthData.content;
          }
          cellEl = _react2['default'].createElement(
            'a',
            { className: prefixCls + '-month' },
            content
          );
        }
        return _react2['default'].createElement(
          'td',
          {
            role: 'gridcell',
            key: monthData.value,
            onClick: disabled ? null : chooseMonth.bind(_this2, monthData.value),
            title: monthData.title,
            className: (0, _classnames2['default'])(classNameMap)
          },
          cellEl
        );
      });
      return _react2['default'].createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    return _react2['default'].createElement(
      'table',
      { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
      _react2['default'].createElement(
        'tbody',
        { className: prefixCls + '-tbody' },
        monthsEls
      )
    );
  };

  return MonthTable;
}(_react.Component);

MonthTable.defaultProps = {
  onSelect: noop
};
MonthTable.propTypes = {
  onSelect: _propTypes2['default'].func,
  cellRender: _propTypes2['default'].func,
  prefixCls: _propTypes2['default'].string,
  value: _propTypes2['default'].object
};
exports['default'] = MonthTable;
module.exports = exports['default'];

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(274);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(275);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(276);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ROW = 4;
var COL = 3;

function goYear(direction) {
  var value = this.state.value.clone();
  value.add(direction, 'year');
  this.setState({
    value: value
  });
}

function chooseYear(year) {
  var value = this.state.value.clone();
  value.year(year);
  value.month(this.state.value.month());
  this.props.onSelect(value);
}

var YearPanel = function (_React$Component) {
  (0, _inherits3['default'])(YearPanel, _React$Component);

  function YearPanel(props) {
    (0, _classCallCheck3['default'])(this, YearPanel);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.prefixCls = props.rootPrefixCls + '-year-panel';
    _this.state = {
      value: props.value || props.defaultValue
    };
    _this.nextDecade = goYear.bind(_this, 10);
    _this.previousDecade = goYear.bind(_this, -10);
    return _this;
  }

  YearPanel.prototype.years = function years() {
    var value = this.state.value;
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var previousYear = startYear - 1;
    var years = [];
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      years[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var year = previousYear + index;
        var content = String(year);
        years[rowIndex][colIndex] = {
          content: content,
          year: year,
          title: content
        };
        index++;
      }
    }
    return years;
  };

  YearPanel.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var value = this.state.value;
    var locale = props.locale;
    var years = this.years();
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 10, 10) * 10;
    var endYear = startYear + 9;
    var prefixCls = this.prefixCls;

    var yeasEls = years.map(function (row, index) {
      var tds = row.map(function (yearData) {
        var _classNameMap;

        var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-selected-cell'] = yearData.year === currentYear, _classNameMap[prefixCls + '-last-decade-cell'] = yearData.year < startYear, _classNameMap[prefixCls + '-next-decade-cell'] = yearData.year > endYear, _classNameMap);
        var clickHandler = void 0;
        if (yearData.year < startYear) {
          clickHandler = _this2.previousDecade;
        } else if (yearData.year > endYear) {
          clickHandler = _this2.nextDecade;
        } else {
          clickHandler = chooseYear.bind(_this2, yearData.year);
        }
        return _react2['default'].createElement(
          'td',
          {
            role: 'gridcell',
            title: yearData.title,
            key: yearData.content,
            onClick: clickHandler,
            className: (0, _classnames2['default'])(classNameMap)
          },
          _react2['default'].createElement(
            'a',
            {
              className: prefixCls + '-year'
            },
            yearData.content
          )
        );
      });
      return _react2['default'].createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    return _react2['default'].createElement(
      'div',
      { className: this.prefixCls },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-header' },
          _react2['default'].createElement('a', {
            className: prefixCls + '-prev-decade-btn',
            role: 'button',
            onClick: this.previousDecade,
            title: locale.previousDecade
          }),
          _react2['default'].createElement(
            'a',
            {
              className: prefixCls + '-decade-select',
              role: 'button',
              onClick: props.onDecadePanelShow,
              title: locale.decadeSelect
            },
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-decade-select-content' },
              startYear,
              '-',
              endYear
            ),
            _react2['default'].createElement(
              'span',
              { className: prefixCls + '-decade-select-arrow' },
              'x'
            )
          ),
          _react2['default'].createElement('a', {
            className: prefixCls + '-next-decade-btn',
            role: 'button',
            onClick: this.nextDecade,
            title: locale.nextDecade
          })
        ),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-body' },
          _react2['default'].createElement(
            'table',
            { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
            _react2['default'].createElement(
              'tbody',
              { className: prefixCls + '-tbody' },
              yeasEls
            )
          )
        )
      )
    );
  };

  return YearPanel;
}(_react2['default'].Component);

exports['default'] = YearPanel;


YearPanel.propTypes = {
  rootPrefixCls: _propTypes2['default'].string,
  value: _propTypes2['default'].object,
  defaultValue: _propTypes2['default'].object
};

YearPanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _classCallCheck2 = __webpack_require__(274);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(275);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(276);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var ROW = 4;
var COL = 3;


function goYear(direction) {
  var next = this.state.value.clone();
  next.add(direction, 'years');
  this.setState({
    value: next
  });
}

function chooseDecade(year, event) {
  var next = this.state.value.clone();
  next.year(year);
  next.month(this.state.value.month());
  this.props.onSelect(next);
  event.preventDefault();
}

var DecadePanel = function (_React$Component) {
  (0, _inherits3['default'])(DecadePanel, _React$Component);

  function DecadePanel(props) {
    (0, _classCallCheck3['default'])(this, DecadePanel);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.state = {
      value: props.value || props.defaultValue
    };

    // bind methods
    _this.prefixCls = props.rootPrefixCls + '-decade-panel';
    _this.nextCentury = goYear.bind(_this, 100);
    _this.previousCentury = goYear.bind(_this, -100);
    return _this;
  }

  DecadePanel.prototype.render = function render() {
    var _this2 = this;

    var value = this.state.value;
    var locale = this.props.locale;
    var currentYear = value.year();
    var startYear = parseInt(currentYear / 100, 10) * 100;
    var preYear = startYear - 10;
    var endYear = startYear + 99;
    var decades = [];
    var index = 0;
    var prefixCls = this.prefixCls;

    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      decades[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var startDecade = preYear + index * 10;
        var endDecade = preYear + index * 10 + 9;
        decades[rowIndex][colIndex] = {
          startDecade: startDecade,
          endDecade: endDecade
        };
        index++;
      }
    }

    var decadesEls = decades.map(function (row, decadeIndex) {
      var tds = row.map(function (decadeData) {
        var _classNameMap;

        var dStartDecade = decadeData.startDecade;
        var dEndDecade = decadeData.endDecade;
        var isLast = dStartDecade < startYear;
        var isNext = dEndDecade > endYear;
        var classNameMap = (_classNameMap = {}, _classNameMap[prefixCls + '-cell'] = 1, _classNameMap[prefixCls + '-selected-cell'] = dStartDecade <= currentYear && currentYear <= dEndDecade, _classNameMap[prefixCls + '-last-century-cell'] = isLast, _classNameMap[prefixCls + '-next-century-cell'] = isNext, _classNameMap);
        var content = dStartDecade + '-' + dEndDecade;
        var clickHandler = void 0;
        if (isLast) {
          clickHandler = _this2.previousCentury;
        } else if (isNext) {
          clickHandler = _this2.nextCentury;
        } else {
          clickHandler = chooseDecade.bind(_this2, dStartDecade);
        }
        return _react2['default'].createElement(
          'td',
          {
            key: dStartDecade,
            onClick: clickHandler,
            role: 'gridcell',
            className: (0, _classnames2['default'])(classNameMap)
          },
          _react2['default'].createElement(
            'a',
            {
              className: prefixCls + '-decade'
            },
            content
          )
        );
      });
      return _react2['default'].createElement(
        'tr',
        { key: decadeIndex, role: 'row' },
        tds
      );
    });

    return _react2['default'].createElement(
      'div',
      { className: this.prefixCls },
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-header' },
        _react2['default'].createElement('a', {
          className: prefixCls + '-prev-century-btn',
          role: 'button',
          onClick: this.previousCentury,
          title: locale.previousCentury
        }),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-century' },
          startYear,
          '-',
          endYear
        ),
        _react2['default'].createElement('a', {
          className: prefixCls + '-next-century-btn',
          role: 'button',
          onClick: this.nextCentury,
          title: locale.nextCentury
        })
      ),
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-body' },
        _react2['default'].createElement(
          'table',
          { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
          _react2['default'].createElement(
            'tbody',
            { className: prefixCls + '-tbody' },
            decadesEls
          )
        )
      )
    );
  };

  return DecadePanel;
}(_react2['default'].Component);

exports['default'] = DecadePanel;


DecadePanel.propTypes = {
  locale: _propTypes2['default'].object,
  value: _propTypes2['default'].object,
  defaultValue: _propTypes2['default'].object,
  rootPrefixCls: _propTypes2['default'].string
};

DecadePanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(291);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createReactClass = __webpack_require__(268);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mapSelf = __webpack_require__(339);

var _mapSelf2 = _interopRequireDefault(_mapSelf);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _TodayButton = __webpack_require__(465);

var _TodayButton2 = _interopRequireDefault(_TodayButton);

var _OkButton = __webpack_require__(466);

var _OkButton2 = _interopRequireDefault(_OkButton);

var _TimePickerButton = __webpack_require__(467);

var _TimePickerButton2 = _interopRequireDefault(_TimePickerButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var CalendarFooter = (0, _createReactClass2['default'])({
  displayName: 'CalendarFooter',

  propTypes: {
    prefixCls: _propTypes2['default'].string,
    showDateInput: _propTypes2['default'].bool,
    disabledTime: _propTypes2['default'].any,
    timePicker: _propTypes2['default'].element,
    selectedValue: _propTypes2['default'].any,
    showOk: _propTypes2['default'].bool,
    onSelect: _propTypes2['default'].func,
    value: _propTypes2['default'].object,
    renderFooter: _propTypes2['default'].func,
    defaultValue: _propTypes2['default'].object
  },

  onSelect: function onSelect(value) {
    this.props.onSelect(value);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2['default'].findDOMNode(this);
  },
  render: function render() {
    var props = this.props;
    var value = props.value,
        prefixCls = props.prefixCls,
        showOk = props.showOk,
        timePicker = props.timePicker,
        renderFooter = props.renderFooter;

    var footerEl = null;
    var extraFooter = renderFooter();
    if (props.showToday || timePicker || extraFooter) {
      var _cx;

      var nowEl = void 0;
      if (props.showToday) {
        nowEl = _react2['default'].createElement(_TodayButton2['default'], (0, _extends3['default'])({}, props, { value: value }));
      }
      var okBtn = void 0;
      if (showOk === true || showOk !== false && !!props.timePicker) {
        okBtn = _react2['default'].createElement(_OkButton2['default'], props);
      }
      var timePickerBtn = void 0;
      if (!!props.timePicker) {
        timePickerBtn = _react2['default'].createElement(_TimePickerButton2['default'], props);
      }

      var footerBtn = void 0;
      if (nowEl || timePickerBtn || okBtn) {
        footerBtn = _react2['default'].createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          (0, _mapSelf2['default'])([nowEl, timePickerBtn, okBtn])
        );
      }
      var cls = (0, _classnames2['default'])((_cx = {}, _cx[prefixCls + '-footer'] = true, _cx[prefixCls + '-footer-show-ok'] = okBtn, _cx));
      footerEl = _react2['default'].createElement(
        'div',
        { className: cls },
        extraFooter,
        footerBtn
      );
    }
    return footerEl;
  }
});

exports['default'] = CalendarFooter;
module.exports = exports['default'];

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = TodayButton;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _util = __webpack_require__(270);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function TodayButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      value = _ref.value,
      timePicker = _ref.timePicker,
      disabled = _ref.disabled,
      disabledDate = _ref.disabledDate,
      onToday = _ref.onToday,
      text = _ref.text;

  var localeNow = (!text && timePicker ? locale.now : text) || locale.today;
  var disabledToday = disabledDate && !(0, _util.isAllowedDate)((0, _util.getTodayTime)(value), disabledDate);
  var isDisabled = disabledToday || disabled;
  var disabledTodayClass = isDisabled ? prefixCls + '-today-btn-disabled' : '';
  return _react2['default'].createElement(
    'a',
    {
      className: prefixCls + '-today-btn ' + disabledTodayClass,
      role: 'button',
      onClick: isDisabled ? null : onToday,
      title: (0, _util.getTodayTimeStr)(value)
    },
    localeNow
  );
}
module.exports = exports['default'];

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = OkButton;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function OkButton(_ref) {
  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      okDisabled = _ref.okDisabled,
      onOk = _ref.onOk;

  var className = prefixCls + "-ok-btn";
  if (okDisabled) {
    className += " " + prefixCls + "-ok-btn-disabled";
  }
  return _react2["default"].createElement(
    "a",
    {
      className: className,
      role: "button",
      onClick: okDisabled ? null : onOk
    },
    locale.ok
  );
}
module.exports = exports['default'];

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = TimePickerButton;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(9);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function TimePickerButton(_ref) {
  var _classnames;

  var prefixCls = _ref.prefixCls,
      locale = _ref.locale,
      showTimePicker = _ref.showTimePicker,
      onOpenTimePicker = _ref.onOpenTimePicker,
      onCloseTimePicker = _ref.onCloseTimePicker,
      timePickerDisabled = _ref.timePickerDisabled;

  var className = (0, _classnames3['default'])((_classnames = {}, _classnames[prefixCls + '-time-picker-btn'] = true, _classnames[prefixCls + '-time-picker-btn-disabled'] = timePickerDisabled, _classnames));
  var onClick = null;
  if (!timePickerDisabled) {
    onClick = showTimePicker ? onCloseTimePicker : onOpenTimePicker;
  }
  return _react2['default'].createElement(
    'a',
    {
      className: className,
      role: 'button',
      onClick: onClick
    },
    showTimePicker ? locale.dateSelect : locale.timeSelect
  );
}
module.exports = exports['default'];

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(9);

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = __webpack_require__(26);

var _moment2 = _interopRequireDefault(_moment);

var _index = __webpack_require__(270);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function getNow() {
  return (0, _moment2['default'])();
}

function getNowByCurrentStateValue(value) {
  var ret = void 0;
  if (value) {
    ret = (0, _index.getTodayTime)(value);
  } else {
    ret = getNow();
  }
  return ret;
}

var CalendarMixin = {
  propTypes: {
    value: _propTypes2['default'].object,
    defaultValue: _propTypes2['default'].object,
    onKeyDown: _propTypes2['default'].func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onKeyDown: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var value = props.value || props.defaultValue || getNow();
    return {
      value: value,
      selectedValue: props.selectedValue || props.defaultSelectedValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    var selectedValue = nextProps.selectedValue;

    if ('value' in nextProps) {
      value = value || nextProps.defaultValue || getNowByCurrentStateValue(this.state.value);
      this.setState({
        value: value
      });
    }
    if ('selectedValue' in nextProps) {
      this.setState({
        selectedValue: selectedValue
      });
    }
  },
  onSelect: function onSelect(value, cause) {
    if (value) {
      this.setValue(value);
    }
    this.setSelectedValue(value, cause);
  },
  renderRoot: function renderRoot(newProps) {
    var _className;

    var props = this.props;
    var prefixCls = props.prefixCls;

    var className = (_className = {}, _className[prefixCls] = 1, _className[prefixCls + '-hidden'] = !props.visible, _className[props.className] = !!props.className, _className[newProps.className] = !!newProps.className, _className);

    return _react2['default'].createElement(
      'div',
      {
        ref: this.saveRoot,
        className: '' + (0, _classnames2['default'])(className),
        style: this.props.style,
        tabIndex: '0',
        onKeyDown: this.onKeyDown
      },
      newProps.children
    );
  },
  setSelectedValue: function setSelectedValue(selectedValue, cause) {
    // if (this.isAllowedDate(selectedValue)) {
    if (!('selectedValue' in this.props)) {
      this.setState({
        selectedValue: selectedValue
      });
    }
    this.props.onSelect(selectedValue, cause);
    // }
  },
  setValue: function setValue(value) {
    var originalValue = this.state.value;
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    if (originalValue && value && !originalValue.isSame(value) || !originalValue && value || originalValue && !value) {
      this.props.onChange(value);
    }
  },
  isAllowedDate: function isAllowedDate(value) {
    var disabledDate = this.props.disabledDate;
    var disabledTime = this.props.disabledTime;
    return (0, _index.isAllowedDate)(value, disabledDate, disabledTime);
  }
};

exports['default'] = CalendarMixin;
module.exports = exports['default'];

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _en_US = __webpack_require__(470);

var _en_US2 = _interopRequireDefault(_en_US);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

exports['default'] = {
  propTypes: {
    className: _propTypes2['default'].string,
    locale: _propTypes2['default'].object,
    style: _propTypes2['default'].object,
    visible: _propTypes2['default'].bool,
    onSelect: _propTypes2['default'].func,
    prefixCls: _propTypes2['default'].string,
    onChange: _propTypes2['default'].func,
    onOk: _propTypes2['default'].func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      locale: _en_US2['default'],
      style: {},
      visible: true,
      prefixCls: 'rc-calendar',
      className: '',
      onSelect: noop,
      onChange: noop,
      onClear: noop,
      renderFooter: function renderFooter() {
        return null;
      },
      renderSidebar: function renderSidebar() {
        return null;
      }
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  },
  getFormat: function getFormat() {
    var format = this.props.format;
    var _props = this.props,
        locale = _props.locale,
        timePicker = _props.timePicker;

    if (!format) {
      if (timePicker) {
        format = locale.dateTimeFormat;
      } else {
        format = locale.dateFormat;
      }
    }
    return format;
  },
  focus: function focus() {
    if (this.rootInstance) {
      this.rootInstance.focus();
    }
  },
  saveRoot: function saveRoot(root) {
    this.rootInstance = root;
  }
};
module.exports = exports['default'];

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports['default'] = {
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'Select time',
  dateSelect: 'Select date',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
module.exports = exports['default'];

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createReactClass = __webpack_require__(268);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(257);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(26);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var DateInput = (0, _createReactClass2['default'])({
  displayName: 'DateInput',

  propTypes: {
    prefixCls: _propTypes2['default'].string,
    timePicker: _propTypes2['default'].object,
    value: _propTypes2['default'].object,
    disabledTime: _propTypes2['default'].any,
    format: _propTypes2['default'].string,
    locale: _propTypes2['default'].object,
    disabledDate: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onClear: _propTypes2['default'].func,
    placeholder: _propTypes2['default'].string,
    onSelect: _propTypes2['default'].func,
    selectedValue: _propTypes2['default'].object
  },

  getInitialState: function getInitialState() {
    var selectedValue = this.props.selectedValue;
    return {
      str: selectedValue && selectedValue.format(this.props.format) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.cachedSelectionStart = this.dateInputInstance.selectionStart;
    this.cachedSelectionEnd = this.dateInputInstance.selectionEnd;
    // when popup show, click body will call this, bug!
    var selectedValue = nextProps.selectedValue;
    this.setState({
      str: selectedValue && selectedValue.format(nextProps.format) || '',
      invalid: false
    });
  },
  componentDidUpdate: function componentDidUpdate() {
    if (!this.state.invalid) {
      this.dateInputInstance.setSelectionRange(this.cachedSelectionStart, this.cachedSelectionEnd);
    }
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var value = void 0;
    var _props = this.props,
        disabledDate = _props.disabledDate,
        format = _props.format,
        onChange = _props.onChange;

    if (str) {
      var parsed = (0, _moment2['default'])(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value = this.props.value.clone();
      value.year(parsed.year()).month(parsed.month()).date(parsed.date()).hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      if (value && (!disabledDate || !disabledDate(value))) {
        var originalValue = this.props.selectedValue;
        if (originalValue && value) {
          if (!originalValue.isSame(value)) {
            onChange(value);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        this.setState({
          invalid: true
        });
        return;
      }
    } else {
      onChange(null);
    }
    this.setState({
      invalid: false
    });
  },
  onClear: function onClear() {
    this.setState({
      str: ''
    });
    this.props.onClear(null);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2['default'].findDOMNode(this);
  },
  focus: function focus() {
    if (this.dateInputInstance) {
      this.dateInputInstance.focus();
    }
  },
  saveDateInput: function saveDateInput(dateInput) {
    this.dateInputInstance = dateInput;
  },
  render: function render() {
    var props = this.props;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;
    var locale = props.locale,
        prefixCls = props.prefixCls,
        placeholder = props.placeholder;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-date-input-wrap' },
        _react2['default'].createElement('input', {
          ref: this.saveDateInput,
          className: prefixCls + '-input ' + invalidClass,
          value: str,
          disabled: props.disabled,
          placeholder: placeholder,
          onChange: this.onInputChange
        })
      ),
      props.showClear ? _react2['default'].createElement('a', {
        className: prefixCls + '-clear-btn',
        role: 'button',
        title: locale.clear,
        onClick: this.onClear
      }) : null
    );
  }
});

exports['default'] = DateInput;
module.exports = exports['default'];

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var service_request_1 = __webpack_require__(41);
var hornet_js_utils_1 = __webpack_require__(0);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-core.services.service-page");
var ServicePage = /** @class */ (function (_super) {
    tslib_1.__extends(ServicePage, _super);
    function ServicePage() {
        var _this = _super.call(this) || this;
        var fullSpa = hornet_js_utils_1.Utils.config.getOrDefault("fullSpa.enabled", false);
        if (fullSpa) {
            _this.serviceHost = hornet_js_utils_1.Utils.config.getOrDefault("fullSpa.host", "");
            _this.serviceName = hornet_js_utils_1.Utils.buildContextPath(hornet_js_utils_1.Utils.config.getOrDefault("fullSpa.name", "/services"));
        }
        return _this;
    }
    return ServicePage;
}(service_request_1.ServiceRequest));
exports.ServicePage = ServicePage;



/***/ }),
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {
/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_result_1 = __webpack_require__(506);
var disposition_type_1 = __webpack_require__(106);
/**
 * @class
 * @classdesc HornetResult définit un result de type FILE.
 */
var ResultFile = /** @class */ (function (_super) {
    tslib_1.__extends(ResultFile, _super);
    function ResultFile(options, mediaType) {
        var _this = _super.call(this, options, mediaType) || this;
        options.dispositionType = options.dispositionType || disposition_type_1.DispositionType.ATTACHMENT;
        return _this;
    }
    /*
     *@inheritdoc
     */
    ResultFile.prototype.configure = function (res) {
        var buffer = this.options.data instanceof Buffer ? this.options.data : new Buffer(this.options.data);
        var headers = {
            "Content-Type": this.mediaType.MIME,
            "Content-Length": buffer.length
        };
        headers["Content-Disposition"] = this.options.dispositionType + "; filename=\"" + (this.options.filename || "filename") + "\"";
        res.writeHead(200, headers);
        res.end(buffer);
        return false;
    };
    return ResultFile;
}(hornet_result_1.HornetResult));
exports.ResultFile = ResultFile;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(23).Buffer))

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(258);
var _ = __webpack_require__(6);
var classNames = __webpack_require__(9);
var abstract_field_datasource_1 = __webpack_require__(307);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.radios-field");
/**
 * Composant groupe de boutons radio
 */
var RadiosField = /** @class */ (function (_super) {
    tslib_1.__extends(RadiosField, _super);
    function RadiosField(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (_this.state.dataSource && _this.state.data) {
            throw new Error("Le RadiosField " + _this.state.name + " possède une props dataSource et une props data");
        }
        if (!_this.state.id) {
            _this.state.id = _this.state.name;
        }
        if (_this.state.dataSource && _this.state.dataSource.selected
            && ((_this.isDataSourceSelectedArray() && _this.state.dataSource.selected.length > 0) || !_this.isDataSourceSelectedArray())) {
            _this.state.selected = _this.state.dataSource.selected;
        }
        else {
            _this.state.selected = _this.props.defaultValue;
        }
        if (_this.state.dataSource) {
            _this.state.dataSource.on("select", function (selectedItems) {
                _this.setState({ selected: selectedItems });
            });
        }
        return _this;
    }
    RadiosField.prototype.setData = function (value) {
        /** liste des choix disponibles */
        this.setState({ data: value });
    };
    /**
     * enregistre la liste des choix possibles
     */
    RadiosField.prototype.setItem = function () {
        this.setState({ items: this.props.dataSource.results });
        /* permet de faire appel a la méthode setCurrentValue de dom-adapter pour cocher les valeurs*/
        this.setCurrentValue(this.state.currentValue);
    };
    RadiosField.prototype.handleClick = function (item) {
        if (this.props.dataSource) {
            this.props.dataSource.select(item);
        }
        else {
            this.setState({ selected: item });
        }
    };
    RadiosField.prototype.handleChange = function (event) {
        return true;
    };
    RadiosField.prototype.isDataSourceSelectedArray = function () {
        return Array.isArray(this.state.dataSource.selected);
    };
    /**
     * Génère le rendu des radio boutons à partir d'un dataSource
     * @returns {any}
     */
    RadiosField.prototype.renderRadioItemdataSource = function () {
        if (this.state.items && this.state.items.length > 0) {
            return this.state.items.map(this.renderRadioItem);
        }
    };
    /**
     * Génère le rendu d'un radio bouton et son libellé
     * @param choice choix sélectionnable
     * @param id number position in array
     * @returns {any}
     */
    RadiosField.prototype.renderRadioItem = function (choice, id) {
        var _this = this;
        /* On n'inclut pas les propriétés spécifiques ou celles dont on surcharge la valeur */
        var htmlProps = _.omit(this.getHtmlProps(), [
            "RadiosField, lié à une datasource (initialisée avec un array)dataSource",
            "type",
            "currentValue",
            "defaultChecked",
            "value",
            "id",
            "data"
        ]);
        if (this.state.readOnly && !this.state.disabled) {
            htmlProps.disabled = true;
        }
        var cx = classNames({
            "fl radio-inline": this.state.inline == abstract_field_1.InlineStyle.ALL || this.state.inline == abstract_field_1.InlineStyle.FIELD
        });
        var label = choice[this.state.labelKey] ?
            choice[this.state.labelKey] :
            choice[this.state.valueKey];
        var idInput = this.state.id + "-" + label;
        var key = idInput + "-" + choice.value;
        // positioning an input inside a label
        // see @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#Usage_notes
        return (React.createElement("li", { key: key, className: cx },
            React.createElement("label", { className: "radio-label", htmlFor: idInput },
                React.createElement("input", tslib_1.__assign({}, htmlProps, { ref: function (elt) { return _this.registerHtmlElement(elt); }, type: "radio", onClick: function () { return _this.handleClick(choice); }, value: choice[this.state.valueKey], id: idInput, checked: this.shouldRadioBeChecked(choice), onChange: this.handleChange })),
                React.createElement("span", { className: "outer" }),
                label)));
    };
    RadiosField.prototype.shouldRadioBeChecked = function (choice) {
        if (this.state.selected != undefined) {
            if (this.state.dataSource) {
                var mySelected = void 0;
                if (this.state.selected[this.props.valueKey] != undefined) {
                    mySelected = this.state.selected[this.props.valueKey];
                }
                else {
                    mySelected = this.state.selected[this.state.dataSource.keysMap[this.props.valueKey]];
                }
                return choice[this.state.valueKey] == mySelected;
            }
            else {
                return choice == this.state.selected;
            }
        }
        else {
            return false;
        }
    };
    /**
     * @override
     * Génère le rendu du libellé pour le champ
     * l'override permet de supprimer le for du label
     * @param fieldId identifiant du champ
     * @param fieldName nom du champ
     * @param label libellé à afficher
     * @param required indique si le champ est obligatoire
     * @returns {any}
     */
    RadiosField.prototype.renderLabel = function (fieldId, fieldName, label, required) {
        var hasData = this.state.data && this.state.data.length > 0;
        var hasDataSource = this.state.dataSource && this.state.dataSource.results && this.state.dataSource.results.length > 0;
        var id = "";
        if (hasData) {
            id = fieldId + "-" + this.state.data[0][this.state.labelKey];
        }
        if (hasDataSource) {
            id = fieldId + "-" + this.state.items[0][this.state.labelKey];
        }
        return _super.prototype.renderLabel.call(this, id, fieldName, label, required);
    };
    /**
     * Génère le rendu spécifique du champ : un groupe de boutons radio correspondant au tableau choices
     * @returns {any}
     */
    RadiosField.prototype.renderWidget = function () {
        var _this = this;
        var cx = classNames("radio", { "flex-container": this.state.inline }, { "inline": this.state.inline == RadiosField.Inline.ALL });
        var hasData = this.state.data && this.state.data.length > 0;
        var hasDataSource = this.state.dataSource && this.state.dataSource.results && this.state.dataSource.results.length > 0;
        return (React.createElement("ul", { className: cx },
            hasData ? this.state.data.map(this.renderRadioItem) : null,
            hasDataSource ? this.renderRadioItemdataSource() : null,
            !hasData && !hasDataSource ?
                React.createElement("input", { ref: function (elt) { return _this.registerHtmlElement(elt); }, type: "hidden", name: this.state.name, id: this.state.id }) : null));
    };
    RadiosField.defaultProps = _.assign(_.cloneDeep(abstract_field_1.AbstractField.defaultProps), {
        labelClass: "blocLabelUp",
        valueKey: "value",
        labelKey: "label",
        checkedKey: "defaultChecked",
        inline: abstract_field_1.InlineStyle.NONE
    });
    return RadiosField;
}(abstract_field_datasource_1.AbstractFieldDatasource));
exports.RadiosField = RadiosField;



/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var hornet_js_utils_1 = __webpack_require__(0);
var service_page_1 = __webpack_require__(472);
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.services.page.admin.admin-service-impl");
var ServerFormServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ServerFormServiceImpl, _super);
    function ServerFormServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServerFormServiceImpl.prototype.insererDonnee = function (data) {
        logger.trace("SERVICES - insert : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform1server"),
            data: data,
        };
        request.attach = [];
        request.attach.push({ field: "copie_permis", file: data["copie_permis"], fileName: data["copie_permis"].name });
        request.attach.push({ field: "copie_note_verbale_maeci", file: data["copie_note_verbale_maeci"], fileName: data["copie_note_verbale_maeci"].name });
        return this.fetch(request);
    };
    ServerFormServiceImpl.prototype.insererDemandeAuthentification = function (data) {
        logger.trace("SERVICES - insert : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server"),
            data: data
        };
        return this.fetch(request);
    };
    ServerFormServiceImpl.prototype.insererValise = function (data) {
        logger.trace("SERVICES - insert : ", data);
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server/insertValise"),
            data: data
        };
        return this.fetch(request);
    };
    ServerFormServiceImpl.prototype.getListePrefectures = function () {
        logger.trace("SERVICES - list");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform1server/listPrefectures")
        };
        return this.fetch(request);
    };
    ServerFormServiceImpl.prototype.getListeValises = function () {
        logger.trace("SERVICES - list");
        var request = {
            method: "post",
            url: this.buildUrl("/fvmform2server/listValises")
        };
        return this.fetch(request);
    };
    return ServerFormServiceImpl;
}(service_page_1.ServicePage));
exports.ServerFormServiceImpl = ServerFormServiceImpl;



/***/ }),
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var hornet_js_utils_1 = __webpack_require__(0);
// Classe générique parent des Classes d'action
var abstract_routes_1 = __webpack_require__(100);
// Classes nécessaires pour la génération de pdfs et l'affichage de fichiers
var result_file_1 = __webpack_require__(487);
var result_pdf_1 = __webpack_require__(507);
var media_type_1 = __webpack_require__(52);
var disposition_type_1 = __webpack_require__(106);
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.actions.admin.fvm_actions");
/**
 * Classe d'action gérant l'insertion d'un nouveau dossier dans la base
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var InserDossier = /** @class */ (function (_super) {
    tslib_1.__extends(InserDossier, _super);
    function InserDossier() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* Objet JSON contenant deux attributs :
            error : Classe de l'erreur retournée
            reason : Motif de l'erreur
        */
        _this.Error = { "error": null, "reason": null };
        return _this;
    }
    /**
     * Méthode exécutant un service d'insertion d'un dossier dans la base de données
     * @returns {Promise<any>}
     */
    InserDossier.prototype.execute = function () {
        logger.trace("ACTION inser - FormDossierFVMAction.InserDossier");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
            files : Tableau d'objets Multer.File (Contenu Multipart encapsulant les fichiers importés par l'utilisateur)
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        // Si le tableau contient au moins deux fichiers
        if (this.req.files[0] instanceof File && this.req.files[1] instanceof File) {
            // Si les fichiers sont des PDF
            if (this.req.files[0].mimetype != "pdf" && this.req.files[1].mimetype != "pdf") {
                // Concaténer le contenu des objets aux autres données
                data["copie_permis"] = {};
                data["copie_permis"].nom = this.req.files[0].originalname;
                data["copie_permis"].mimetype = this.req.files[0].mimetype;
                data["copie_permis"].encoding = this.req.files[0].encoding;
                data["copie_permis"].size = this.req.files[0].size;
                data["copie_permis"].data = this.req.files[0].buffer;
                data["copie_note_verbale_maeci"] = {};
                data["copie_note_verbale_maeci"].nom = this.req.files[1].originalname;
                data["copie_note_verbale_maeci"].mimetype = this.req.files[1].mimetype;
                data["copie_note_verbale_maeci"].encoding = this.req.files[1].encoding;
                data["copie_note_verbale_maeci"].size = this.req.files[1].size;
                data["copie_note_verbale_maeci"].data = this.req.files[1].buffer;
            }
            else {
                // Retourner une erreur
                this.Error.error = new Error("FileUploadError");
                this.Error.reason = "Les fichiers doivent être des PDF";
                return Promise.resolve(this.Error);
            }
            return this.getService().insererDonnee(data);
        }
        else {
            // Retourner une erreur
            this.Error.error = new Error("FileUploadError");
            this.Error.reason = "Deux fichiers sont requis en entrée";
            return Promise.resolve(this.Error);
        }
    };
    return InserDossier;
}(abstract_routes_1.RouteActionService));
exports.InserDossier = InserDossier;
/**
 * Classe d'action gérant l'insertion d'une nouvelle demande d'authentification dans la base
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var InserDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(InserDemandeAuthentification, _super);
    function InserDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service d'insertion d'une demande d'authentification dans la base de données
     * @returns {Promise<any>}
     */
    InserDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION inser - FormDemandeAuthentificationFVMAction.InserDemandeAuthentification");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().insererDemandeAuthentification(data);
    };
    return InserDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.InserDemandeAuthentification = InserDemandeAuthentification;
/**
 * Classe d'action gérant l'insertion d'une nouvelle valise dans la base
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var InserValise = /** @class */ (function (_super) {
    tslib_1.__extends(InserValise, _super);
    function InserValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service d'insertion d'une valise dans la base de données
     * @returns {Promise<any>}
     */
    InserValise.prototype.execute = function () {
        logger.trace("ACTION inser - FormDemandeAuthentificationFVMAction.InserValise");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().insererValise(data);
    };
    return InserValise;
}(abstract_routes_1.RouteActionService));
exports.InserValise = InserValise;
/**
 * Classe d'action gérant la suppression d'un dossier dans la base
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var DeleteDossier = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteDossier, _super);
    function DeleteDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service de suppression d'un dossier dans la base de données
     * @returns {Promise<any>}
     */
    DeleteDossier.prototype.execute = function () {
        logger.trace("ACTION delete - RecordListFVMAction.DeleteDossier");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().deleteDossier(data);
    };
    return DeleteDossier;
}(abstract_routes_1.RouteActionService));
exports.DeleteDossier = DeleteDossier;
/**
 * Classe d'action gérant la suppression d'une demande d'authentification dans la base
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var DeleteDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(DeleteDemandeAuthentification, _super);
    function DeleteDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode exécutant un service de suppression d'une demande d'authentification dans la base de données
     * @returns {Promise<any>}
     */
    DeleteDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION delete - RecordDetailsFVMAction.DeleteDemandeAuthentification");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().deleteDemandeAuthentification(data);
    };
    return DeleteDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.DeleteDemandeAuthentification = DeleteDemandeAuthentification;
/**
 * Classe d'action gérant le listage des préfectures stockées dans la base de données
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var ListPrefecture = /** @class */ (function (_super) {
    tslib_1.__extends(ListPrefecture, _super);
    function ListPrefecture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la liste des préfectures stockées dans la base de données
     * @returns {Promise<Array<PrefectureMetier>>} Liste des préfectures stockées dans la base
     */
    ListPrefecture.prototype.execute = function () {
        logger.trace("ACTION list - FormDossierFVMAction.ListPrefecture");
        return this.getService().getListePrefectures();
    };
    return ListPrefecture;
}(abstract_routes_1.RouteActionService));
exports.ListPrefecture = ListPrefecture;
/**
 * Classe d'action gérant le listage des valises stockées dans la base
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var ListValise = /** @class */ (function (_super) {
    tslib_1.__extends(ListValise, _super);
    function ListValise() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la liste des valises stockées dans la base de donénes
     * @returns {Promise<Array<ValiseMetier>>} Liste des valises stockées dans la base
     */
    ListValise.prototype.execute = function () {
        logger.trace("ACTION list - FormDemandeAuthentificationFVMAction.ListValise");
        return this.getService().getListeValises();
    };
    return ListValise;
}(abstract_routes_1.RouteActionService));
exports.ListValise = ListValise;
/**
 * Classe d'action gérant le listage des dossiers stockés dans la base
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var ListDossier = /** @class */ (function (_super) {
    tslib_1.__extends(ListDossier, _super);
    function ListDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la liste des dossiers stockés dans la base de données
     * @returns {Promise<Array<any>>} Liste des dossiers stockés dans la base
     */
    ListDossier.prototype.execute = function () {
        logger.trace("ACTION list - RecordListFVMAction.ListDossier");
        return this.getService().getListeDossiers();
    };
    return ListDossier;
}(abstract_routes_1.RouteActionService));
exports.ListDossier = ListDossier;
/**
 * Classe d'action gérant le retour du dossier correspondant aux attributs donnés en entrée
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var GetDossier = /** @class */ (function (_super) {
    tslib_1.__extends(GetDossier, _super);
    function GetDossier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant le dossier correspondant aux attributs donnés en entrée
     * @returns {Promise<any>} Dossier correspondant aux attributs donnés en entrée
     */
    GetDossier.prototype.execute = function () {
        logger.trace("ACTION list - RecordDetailsFVMAction.GetDossier");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().getDossier(data);
    };
    return GetDossier;
}(abstract_routes_1.RouteActionService));
exports.GetDossier = GetDossier;
/**
 * Classe d'action gérant le retour de la demande d'authentification correspondant aux attributs donnés en entrée
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var GetDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetDemandeAuthentification, _super);
    function GetDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la demande d'authentification correspondant aux attributs donnés en entrée
     * @returns {Promise<any>} Demande d'authentification correspondant aux attributs donnés en entrée
     */
    GetDemandeAuthentification.prototype.execute = function () {
        logger.trace("ACTION list - RecordDetailsFVMAction.GetDemandeAuthentification");
        /* this.req : Request : contient les attributs de la requête HTTP à l'origine de l'action
            body : Objet JSON contenant les données passées dans le corps de la requête
         */
        // Variable : Objet JSON : contient les données à passer en entrée du service
        var data = this.req.body;
        return this.getService().getDemandeAuthentification(data);
    };
    return GetDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetDemandeAuthentification = GetDemandeAuthentification;
/* TODO
export class GetReleve extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getReleve(data);
  }
}

export class GetNoteVerbale extends RouteActionService<any, ClientListService> {
  execute(): Promise<any> {
    logger.trace("ACTION list - Appel API : PermisAPI.list - Dispatch PERMIS_LIST");

    let data = this.req.body;

    return this.getService().getNoteVerbale(data);
  }
}
*/
/**
 * Classe d'action gérant le retour de la copie d'un permis de conduire
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var GetCopiePermis = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopiePermis, _super);
    function GetCopiePermis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la copie d'un permis de conduire
     * @returns {Promise<ResultFile>} Copie d'un permis de conduire sous la forme d'un HornetResult
     */
    GetCopiePermis.prototype.execute = function () {
        logger.trace("ACTION file - RecordDetailsFVMAction.GetCopiePermis");
        return this.getService().getCopiePermis(this.attributes.idCopiePermis).then(function (copiePermis) {
            // Réponse de type fichier joint
            return new result_file_1.ResultFile({
                // Contenu du fichier
                "data": copiePermis.data,
                "filename": copiePermis.nom,
                "encoding": copiePermis.encoding,
                "size": copiePermis.size,
                // Affichage du contenu du fichier directement dans le navigateur
                "dispositionType": disposition_type_1.DispositionType.INLINE
            }, media_type_1.MediaTypes.fromMime(copiePermis.mimetype));
        });
    };
    return GetCopiePermis;
}(abstract_routes_1.RouteActionService));
exports.GetCopiePermis = GetCopiePermis;
/**
 * Classe d'action gérant le retour de la copie d'une note verbale du MAECI
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var GetCopieNoteVerbaleMAECI = /** @class */ (function (_super) {
    tslib_1.__extends(GetCopieNoteVerbaleMAECI, _super);
    function GetCopieNoteVerbaleMAECI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode retournant la copie d'une note verbale du MAECI
     * @returns {Promise<ResultFile>} Copie d'une note verbale du MAECI sous la forme d'un HornetResult
     */
    GetCopieNoteVerbaleMAECI.prototype.execute = function () {
        logger.trace("ACTION file - RecordDetailsFVMAction.getCopieNoteVerbaleMAECI");
        return this.getService().getCopieNoteVerbaleMAECI(this.attributes.idCopieNoteVerbaleMAECI).then(function (copieNoteVerbaleMAECI) {
            // Réponse de type fichier joint
            return new result_file_1.ResultFile({
                // Contenu du fichier
                "data": copieNoteVerbaleMAECI.data,
                "filename": copieNoteVerbaleMAECI.nom,
                "encoding": copieNoteVerbaleMAECI.encoding,
                "size": copieNoteVerbaleMAECI.size,
                // Affichage du contenu du fichier directement dans le navigateur
                "dispositionType": disposition_type_1.DispositionType.INLINE
            }, media_type_1.MediaTypes.fromMime(copieNoteVerbaleMAECI.mimetype));
        });
    };
    return GetCopieNoteVerbaleMAECI;
}(abstract_routes_1.RouteActionService));
exports.GetCopieNoteVerbaleMAECI = GetCopieNoteVerbaleMAECI;
/**
 * Classe d'action gérant la génération d'un document de demande d'authentification
 * @extends {RouteActionService} Classe générique : <Type des attributs de l'action, Interface de la Classe de service>
 */
var GetPDFDemandeAuthentification = /** @class */ (function (_super) {
    tslib_1.__extends(GetPDFDemandeAuthentification, _super);
    function GetPDFDemandeAuthentification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Méthode générant un document de demande d'authentification
     * @returns {Promise<ResultPDF>} Demande d'authentification sous la forme d'un Hornet Result
     */
    GetPDFDemandeAuthentification.prototype.execute = function () {
        var _this = this;
        logger.trace("ACTION file - RecordDetailsFVMAction.GetPDFDemandeAuthentification");
        // Variable : Tableau de chaînes de caractères : paramètres variables entrés par l'utilisateur
        var dataString = this.attributes.data.split("+");
        if (dataString[4] == null) {
            dataString[4] = "";
        }
        return this.getService().getPDFDemandeAuthentification(this.attributes.idPermis).then(function (result) {
            // Variables : Objets JSON : paramètres variables dans le modèle de la demande d'authentification
            var dossier = result.dossier[0];
            var demandeAuthentification = result.demandeAuthentification[0];
            // Réponse de type PDF
            return new result_pdf_1.ResultPDF({
                fonts: {
                    // Fichiers sources définissant la police TimesNewRoman
                    Times_New_Roman: {
                        normal: "src/resources/fonts/Times_New_Roman_Normal.ttf",
                        bold: "src/resources/fonts/Times_New_Roman_Bold.ttf",
                        italics: "src/resources/fonts/Times_New_Roman_Italic.ttf",
                        bolditalics: "src/resources/fonts/Times_New_Roman_BoldItalic.ttf"
                    }
                },
                // Définition du fichier PDF
                definition: {
                    pageSize: "A4",
                    // Contenu du fichier PDF
                    content: [
                        {
                            columns: [
                                {
                                    width: "30%",
                                    stack: [
                                        { text: "AMBASSADE DE FRANCE AU MAROC", bold: true, fontSize: 11 },
                                        { text: "__________", margin: [0, 0, 0, 30] },
                                        { text: "SERVICE COMMUN DE GESTION", margin: [0, 0, 0, 10], bold: true, italics: true, fontSize: 9 },
                                        { text: "N°" + demandeAuthentification.numDemandeAuthentification + "/SCG", margin: [0, 0, 0, 30], fontSize: 10 },
                                    ],
                                    alignment: "center"
                                },
                                {
                                    width: "80",
                                    image: "src/resources/img/RepubliqueFrancaiseImage.png",
                                    alignment: "center"
                                }
                            ],
                            columnGap: 30
                        },
                        { text: "Service des Permis de Conduire", bold: true, italics: true, fontSize: 10 },
                        { text: "Affaire suivie par", bold: true, italics: true, fontSize: 10 },
                        { text: "MME " + dataString[0].toUpperCase() + " " + _this.capitalize(dataString[1]), margin: [5, 0, 0, 0], bold: true, italics: true, fontSize: 10 },
                        { text: _this.capitalize(dataString[1]) + "." + _this.capitalize(dataString[0]) + "@diplomatie.gouv.fr", fontSize: 10 },
                        {
                            stack: [
                                { text: dataString[2].toUpperCase() + " " + dossier.prefecture.toUpperCase() },
                                { text: dataString[3].toUpperCase() },
                                { text: dossier.adresse.toUpperCase() },
                                { text: (dossier.codePostal + " " + dossier.ville).toUpperCase() + " " + dataString[4] }
                            ],
                            margin: [100, 60, 0, 70],
                            alignment: "center"
                        },
                        { text: "OBJET : Demande d'authentification d'un permis de conduire", margin: [0, 0, 0, 30] },
                        {
                            stack: [
                                { text: "Madame, Monsieur,", margin: [0, 0, 0, 30] },
                                { text: "Je vous demande de bien vouloir certifier l'authenticité du titre, dont vous trouverez ci-joint copie appartenant à :", margin: [0, 0, 0, 30] },
                                {
                                    stack: [
                                        { text: dossier.sexe + " " + dossier.nom.toUpperCase() + " " + (dossier.prenom[0].toUpperCase() + dossier.prenom.slice(1)) },
                                        { text: "Né(e) le " + new Date(dossier.dateDeNaissance).toLocaleDateString() },
                                        { text: "À " + dossier.villeDeNaissance.toUpperCase() + " / " + dossier.paysDeNaissance.toUpperCase() }
                                    ],
                                    margin: [0, 0, 0, 30]
                                },
                                {
                                    stack: [
                                        { text: "À déposé son permis de conduire" },
                                        { text: "N° " + dossier.numPermis },
                                        { text: "Délivré le " + new Date(dossier.dateDeDelivrance).toLocaleDateString() },
                                        { text: "Catégorie(s) mentionnée(s) sur le permis" }
                                    ],
                                    margin: [0, 0, 0, 30]
                                },
                                { text: "En vue d'obtenir un permis Marocain.", margin: [0, 0, 0, 30] },
                                { text: "Je vous prie d'agréer, Madame, Monsieur, l'assurance de ma considération distinguée.", margin: [0, 0, 0, 30] }
                            ],
                            margin: [50, 0, 0, 0]
                        }
                    ],
                    defaultStyle: {
                        font: "Times_New_Roman",
                        alignment: "justify",
                        fontSize: 12
                    }
                }
            });
        });
    };
    /**
     * Méthode mettant la première lettre d'un mot en majuscule
     * @param {string} entry Chaîne de caractères à mettre sous le format : [A-Z]{1}[a-z]*
     * @returns {string} Chaîne de caractères mise sous le format : [A-Z]{1}[a-z]*
     */
    GetPDFDemandeAuthentification.prototype.capitalize = function (entry) {
        return entry[0].toUpperCase() + entry.slice(1).toLowerCase();
    };
    return GetPDFDemandeAuthentification;
}(abstract_routes_1.RouteActionService));
exports.GetPDFDemandeAuthentification = GetPDFDemandeAuthentification;


/***/ }),
/* 505 */,
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var service_api_results_1 = __webpack_require__(55);
/**
 * @class
 * @classdesc HornetResult définit un result basique.
 */
var HornetResult = /** @class */ (function () {
    function HornetResult(options, mediaType) {
        this._options = options;
        this._mediaType = mediaType;
    }
    Object.defineProperty(HornetResult.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HornetResult.prototype, "mediaType", {
        get: function () {
            return this._mediaType;
        },
        set: function (value) {
            this._mediaType = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * méthode qui permet d'appliquer un traitement supplémentaire sur les données avant la télé-transmission des data dans la réponse
     * @returns {Promise} revoie une promise de traitement
     */
    HornetResult.prototype.compute = function () {
        return Promise.resolve(true);
    };
    /**
     * méthode qui permet de parametrer les entêtes et le corps de la réponse HTTP en fonction du type de résult
     * @vreturns {boolean} true pour envoyer la reponse [response.end]
     */
    HornetResult.prototype.configure = function (res) {
        res.json(service_api_results_1.NodeApiResultBuilder.build(this.options.data));
        return true;
    };
    /**
     * méthode qui permet d'appeler la chaine des traitements + configuration des la response
     * @returns {Promise} revoie une promise de traitement
     */
    HornetResult.prototype.manageResponse = function (res) {
        var _this = this;
        return this.compute().then(function () {
            if (!res["_headerSent"]) {
                return _this.configure(res);
            }
            return false;
        });
    };
    return HornetResult;
}());
exports.HornetResult = HornetResult;



/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.1
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var _ = __webpack_require__(6);
var media_type_1 = __webpack_require__(52);
var hornet_js_utils_1 = __webpack_require__(0);
var result_file_1 = __webpack_require__(487);
// ------------------------------------------------------------------------------------------------------------------- //
//                                      ResultPDF
// ------------------------------------------------------------------------------------------------------------------- //
/**
 * @class
 * @classdesc HornetResult définit un result de type PDF. see https://github.com/bpampuch/pdfmake
 */
var ResultPDF = /** @class */ (function (_super) {
    tslib_1.__extends(ResultPDF, _super);
    function ResultPDF(options) {
        return _super.call(this, options, media_type_1.MediaTypes.PDF) || this;
    }
    ResultPDF.prototype.compute = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var projectRoot = process.cwd() + '/static/' + hornet_js_utils_1.Utils.config.get("themeName");
                if (_this.options.data && _this.options.data instanceof Array) {
                    var listValue_1 = _.map(_this.options.data, function (item) {
                        if (item) {
                            var arr = [];
                            for (var _i = 0, _a = _this.options.fields; _i < _a.length; _i++) {
                                var field = _a[_i];
                                arr.push(item[field] ? item[field].toString() : '');
                            }
                            return arr;
                        }
                    });
                    var header_1 = _.map(_this.options.fieldNames, function (item) {
                        return { text: item, style: 'tableHeader' };
                    });
                    _this.options.definition.content.forEach(function (element) {
                        if (element.table) {
                            element.table = _.extend(element.table, {
                                body: [header_1].concat(listValue_1),
                                width: _.fill(new Array(_this.options.fields.length), '*')
                            });
                        }
                    });
                }
                var pdfMake = __webpack_require__(508);
                var printer = new pdfMake(_this.options.fonts ? _this.options.fonts : {
                    Roboto: {
                        normal: projectRoot + '/fonts/Roboto-Regular.ttf',
                        bold: projectRoot + '/fonts/Roboto-Medium.ttf',
                        italics: projectRoot + '/fonts/Roboto-Italic.ttf',
                        bolditalics: projectRoot + '/fonts/Roboto-Italic.ttf'
                    }
                });
                _this.options.data = printer.createPdfKitDocument(_this.options.definition);
                resolve(true);
            }
            catch (e) {
                reject(e);
            }
        });
    };
    /**
     * méthode qui permet de parametrer les entêtes et le corps de la réponse HTTP en fonction du type de résult
     * @vreturns {boolean} true pour envoyer la reponse [response.end]
     */
    ResultPDF.prototype.configure = function (res) {
        res.contentType(this.mediaType.MIME);
        //res.attachment(this.options.filename);
        res.writeHead(200); //send headers
        this.options.data.pipe(res);
        this.options.data.end();
        return false;
    };
    return ResultPDF;
}(result_file_1.ResultFile));
exports.ResultPDF = ResultPDF;


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 508 */
/***/ (function(module, exports) {

/*eslint no-unused-vars: ["error", {"args": "none"}]*/
'use strict';

var FontProvider = require('./fontProvider');
var LayoutBuilder = require('./layoutBuilder');
var PdfKit = require('pdfkit');
var sizes = require('./standardPageSizes');
var ImageMeasure = require('./imageMeasure');
var textDecorator = require('./textDecorator');
var TextTools = require('./textTools');
var isFunction = require('./helpers').isFunction;
var isString = require('./helpers').isString;
var isNumber = require('./helpers').isNumber;
var isBoolean = require('./helpers').isBoolean;
var isArray = require('./helpers').isArray;

////////////////////////////////////////
// PdfPrinter

/**
 * @class Creates an instance of a PdfPrinter which turns document definition into a pdf
 *
 * @param {Object} fontDescriptors font definition dictionary
 *
 * @example
 * var fontDescriptors = {
 *	Roboto: {
 *		normal: 'fonts/Roboto-Regular.ttf',
 *		bold: 'fonts/Roboto-Medium.ttf',
 *		italics: 'fonts/Roboto-Italic.ttf',
 *		bolditalics: 'fonts/Roboto-MediumItalic.ttf'
 *	}
 * };
 *
 * var printer = new PdfPrinter(fontDescriptors);
 */
function PdfPrinter(fontDescriptors) {
	this.fontDescriptors = fontDescriptors;
}

/**
 * Executes layout engine for the specified document and renders it into a pdfkit document
 * ready to be saved.
 *
 * @param {Object} docDefinition document definition
 * @param {Object} docDefinition.content an array describing the pdf structure (for more information take a look at the examples in the /examples folder)
 * @param {Object} [docDefinition.defaultStyle] default (implicit) style definition
 * @param {Object} [docDefinition.styles] dictionary defining all styles which can be used in the document
 * @param {Object} [docDefinition.pageSize] page size (pdfkit units, A4 dimensions by default)
 * @param {Number} docDefinition.pageSize.width width
 * @param {Number} docDefinition.pageSize.height height
 * @param {Object} [docDefinition.pageMargins] page margins (pdfkit units)
 * @param {Number} docDefinition.maxPagesNumber maximum number of pages to render
 *
 * @example
 *
 * var docDefinition = {
 * 	info: {
 *		title: 'awesome Document',
 *		author: 'john doe',
 *		subject: 'subject of document',
 *		keywords: 'keywords for document',
 * 	},
 *	content: [
 *		'First paragraph',
 *		'Second paragraph, this time a little bit longer',
 *		{ text: 'Third paragraph, slightly bigger font size', fontSize: 20 },
 *		{ text: 'Another paragraph using a named style', style: 'header' },
 *		{ text: ['playing with ', 'inlines' ] },
 *		{ text: ['and ', { text: 'restyling ', bold: true }, 'them'] },
 *	],
 *	styles: {
 *		header: { fontSize: 30, bold: true }
 *	}
 * }
 *
 * var pdfKitDoc = printer.createPdfKitDocument(docDefinition);
 *
 * pdfKitDoc.pipe(fs.createWriteStream('sample.pdf'));
 * pdfKitDoc.end();
 *
 * @return {Object} a pdfKit document object which can be saved or encode to data-url
 */
PdfPrinter.prototype.createPdfKitDocument = function (docDefinition, options) {
	options = options || {};

	var pageSize = fixPageSize(docDefinition.pageSize, docDefinition.pageOrientation);
	var compressPdf = isBoolean(docDefinition.compress) ? docDefinition.compress : true;

	this.pdfKitDoc = new PdfKit({size: [pageSize.width, pageSize.height], autoFirstPage: false, compress: compressPdf});
	setMetadata(docDefinition, this.pdfKitDoc);

	this.fontProvider = new FontProvider(this.fontDescriptors, this.pdfKitDoc);

	docDefinition.images = docDefinition.images || {};

	var builder = new LayoutBuilder(pageSize, fixPageMargins(docDefinition.pageMargins || 40), new ImageMeasure(this.pdfKitDoc, docDefinition.images));

	registerDefaultTableLayouts(builder);
	if (options.tableLayouts) {
		builder.registerTableLayouts(options.tableLayouts);
	}

	var pages = builder.layoutDocument(docDefinition.content, this.fontProvider, docDefinition.styles || {}, docDefinition.defaultStyle || {fontSize: 12, font: 'Roboto'}, docDefinition.background, docDefinition.header, docDefinition.footer, docDefinition.images, docDefinition.watermark, docDefinition.pageBreakBefore);
	var maxNumberPages = docDefinition.maxPagesNumber || -1;
	if (isNumber(maxNumberPages) && maxNumberPages > -1) {
		pages = pages.slice(0, maxNumberPages);
	}

	// if pageSize.height is set to Infinity, calculate the actual height of the page that
	// was laid out using the height of each of the items in the page.
	if (pageSize.height === Infinity) {
		var pageHeight = calculatePageHeight(pages, docDefinition.pageMargins);
		this.pdfKitDoc.options.size = [pageSize.width, pageHeight];
	}

	renderPages(pages, this.fontProvider, this.pdfKitDoc, options.progressCallback);

	if (options.autoPrint) {
		var printActionRef = this.pdfKitDoc.ref({
			Type: 'Action',
			S: 'Named',
			N: 'Print'
		});
		this.pdfKitDoc._root.data.OpenAction = printActionRef;
		printActionRef.end();
	}
	return this.pdfKitDoc;
};

function setMetadata(docDefinition, pdfKitDoc) {
	// PDF standard has these properties reserved: Title, Author, Subject, Keywords,
	// Creator, Producer, CreationDate, ModDate, Trapped.
	// To keep the pdfmake api consistent, the info field are defined lowercase.
	// Custom properties don't contain a space.
	function standardizePropertyKey(key) {
		var standardProperties = ['Title', 'Author', 'Subject', 'Keywords',
			'Creator', 'Producer', 'CreationDate', 'ModDate', 'Trapped'];
		var standardizedKey = key.charAt(0).toUpperCase() + key.slice(1);
		if (standardProperties.indexOf(standardizedKey) !== -1) {
			return standardizedKey;
		}

		return key.replace(/\s+/g, '');
	}

	pdfKitDoc.info.Producer = 'pdfmake';
	pdfKitDoc.info.Creator = 'pdfmake';

	if (docDefinition.info) {
		for (var key in docDefinition.info) {
			var value = docDefinition.info[key];
			if (value) {
				key = standardizePropertyKey(key);
				pdfKitDoc.info[key] = value;
			}
		}
	}
}

function calculatePageHeight(pages, margins) {
	function getItemHeight(item) {
		if (isFunction(item.item.getHeight)) {
			return item.item.getHeight();
		} else if (item.item._height) {
			return item.item._height;
		} else {
			// TODO: add support for next item types
			return 0;
		}
	}

	var fixedMargins = fixPageMargins(margins || 40);
	var height = fixedMargins.top + fixedMargins.bottom;
	pages.forEach(function (page) {
		page.items.forEach(function (item) {
			height += getItemHeight(item);
		});
	});
	return height;
}

function fixPageSize(pageSize, pageOrientation) {
	function isNeedSwapPageSizes(pageOrientation) {
		if (isString(pageOrientation)) {
			pageOrientation = pageOrientation.toLowerCase();
			return ((pageOrientation === 'portrait') && (size.width > size.height)) ||
				((pageOrientation === 'landscape') && (size.width < size.height));
		}
		return false;
	}

	// if pageSize.height is set to auto, set the height to infinity so there are no page breaks.
	if (pageSize && pageSize.height === 'auto') {
		pageSize.height = Infinity;
	}

	var size = pageSize2widthAndHeight(pageSize || 'A4');
	if (isNeedSwapPageSizes(pageOrientation)) { // swap page sizes
		size = {width: size.height, height: size.width};
	}
	size.orientation = size.width > size.height ? 'landscape' : 'portrait';
	return size;
}

function fixPageMargins(margin) {
	if (!margin) {
		return null;
	}

	if (isNumber(margin)) {
		margin = {left: margin, right: margin, top: margin, bottom: margin};
	} else if (isArray(margin)) {
		if (margin.length === 2) {
			margin = {left: margin[0], top: margin[1], right: margin[0], bottom: margin[1]};
		} else if (margin.length === 4) {
			margin = {left: margin[0], top: margin[1], right: margin[2], bottom: margin[3]};
		} else {
			throw 'Invalid pageMargins definition';
		}
	}

	return margin;
}

function registerDefaultTableLayouts(layoutBuilder) {
	layoutBuilder.registerTableLayouts({
		noBorders: {
			hLineWidth: function (i) {
				return 0;
			},
			vLineWidth: function (i) {
				return 0;
			},
			paddingLeft: function (i) {
				return i && 4 || 0;
			},
			paddingRight: function (i, node) {
				return (i < node.table.widths.length - 1) ? 4 : 0;
			}
		},
		headerLineOnly: {
			hLineWidth: function (i, node) {
				if (i === 0 || i === node.table.body.length) {
					return 0;
				}
				return (i === node.table.headerRows) ? 2 : 0;
			},
			vLineWidth: function (i) {
				return 0;
			},
			paddingLeft: function (i) {
				return i === 0 ? 0 : 8;
			},
			paddingRight: function (i, node) {
				return (i === node.table.widths.length - 1) ? 0 : 8;
			}
		},
		lightHorizontalLines: {
			hLineWidth: function (i, node) {
				if (i === 0 || i === node.table.body.length) {
					return 0;
				}
				return (i === node.table.headerRows) ? 2 : 1;
			},
			vLineWidth: function (i) {
				return 0;
			},
			hLineColor: function (i) {
				return i === 1 ? 'black' : '#aaa';
			},
			paddingLeft: function (i) {
				return i === 0 ? 0 : 8;
			},
			paddingRight: function (i, node) {
				return (i === node.table.widths.length - 1) ? 0 : 8;
			}
		}
	});
}

function pageSize2widthAndHeight(pageSize) {
	if (isString(pageSize)) {
		var size = sizes[pageSize.toUpperCase()];
		if (!size) {
			throw 'Page size ' + pageSize + ' not recognized';
		}
		return {width: size[0], height: size[1]};
	}

	return pageSize;
}

function updatePageOrientationInOptions(currentPage, pdfKitDoc) {
	var previousPageOrientation = pdfKitDoc.options.size[0] > pdfKitDoc.options.size[1] ? 'landscape' : 'portrait';

	if (currentPage.pageSize.orientation !== previousPageOrientation) {
		var width = pdfKitDoc.options.size[0];
		var height = pdfKitDoc.options.size[1];
		pdfKitDoc.options.size = [height, width];
	}
}

function renderPages(pages, fontProvider, pdfKitDoc, progressCallback) {
	pdfKitDoc._pdfMakePages = pages;
	pdfKitDoc.addPage();

	var totalItems = 0;
	if (progressCallback) {
		pages.forEach(function (page) {
			totalItems += page.items.length;
		});
	}

	var renderedItems = 0;
	progressCallback = progressCallback || function () {};

	for (var i = 0; i < pages.length; i++) {
		if (i > 0) {
			updatePageOrientationInOptions(pages[i], pdfKitDoc);
			pdfKitDoc.addPage(pdfKitDoc.options);
		}

		var page = pages[i];
		for (var ii = 0, il = page.items.length; ii < il; ii++) {
			var item = page.items[ii];
			switch (item.type) {
				case 'vector':
					renderVector(item.item, pdfKitDoc);
					break;
				case 'line':
					renderLine(item.item, item.item.x, item.item.y, pdfKitDoc);
					break;
				case 'image':
					renderImage(item.item, item.item.x, item.item.y, pdfKitDoc);
					break;
				case 'beginClip':
					beginClip(item.item, pdfKitDoc);
					break;
				case 'endClip':
					endClip(pdfKitDoc);
					break;
			}
			renderedItems++;
			progressCallback(renderedItems / totalItems);
		}
		if (page.watermark) {
			renderWatermark(page, pdfKitDoc);
		}
	}
}

function renderLine(line, x, y, pdfKitDoc) {
	if (line._pageNodeRef) {
		var newWidth;
		var diffWidth;
		var textTools = new TextTools(null);
		var pageNumber = line._pageNodeRef.positions[0].pageNumber.toString();

		line.inlines[0].text = pageNumber;
		line.inlines[0].linkToPage = pageNumber;
		newWidth = textTools.widthOfString(line.inlines[0].text, line.inlines[0].font, line.inlines[0].fontSize, line.inlines[0].characterSpacing, line.inlines[0].fontFeatures);
		diffWidth = line.inlines[0].width - newWidth;
		line.inlines[0].width = newWidth;

		switch (line.inlines[0].alignment) {
			case 'right':
				line.inlines[0].x += diffWidth;
				break;
			case 'center':
				line.inlines[0].x += diffWidth / 2;
				break;
		}
	}

	x = x || 0;
	y = y || 0;

	var lineHeight = line.getHeight();
	var ascenderHeight = line.getAscenderHeight();
	var descent = lineHeight - ascenderHeight;

	textDecorator.drawBackground(line, x, y, pdfKitDoc);

	//TODO: line.optimizeInlines();
	for (var i = 0, l = line.inlines.length; i < l; i++) {
		var inline = line.inlines[i];
		var shiftToBaseline = lineHeight - ((inline.font.ascender / 1000) * inline.fontSize) - descent;
		var options = {
			lineBreak: false,
			textWidth: inline.width,
			characterSpacing: inline.characterSpacing,
			wordCount: 1,
			link: inline.link
		};

		if (inline.fontFeatures) {
			options.features = inline.fontFeatures;
		}

		pdfKitDoc.fill(inline.color || 'black');

		pdfKitDoc._font = inline.font;
		pdfKitDoc.fontSize(inline.fontSize);
		pdfKitDoc.text(inline.text, x + inline.x, y + shiftToBaseline, options);

		if (inline.linkToPage) {
			var _ref = pdfKitDoc.ref({Type: 'Action', S: 'GoTo', D: [inline.linkToPage, 0, 0]}).end();
			pdfKitDoc.annotate(x + inline.x, y + shiftToBaseline, inline.width, inline.height, {Subtype: 'Link', Dest: [inline.linkToPage - 1, 'XYZ', null, null, null]});
		}

	}

	textDecorator.drawDecorations(line, x, y, pdfKitDoc);
}

function renderWatermark(page, pdfKitDoc) {
	var watermark = page.watermark;

	pdfKitDoc.fill(watermark.color);
	pdfKitDoc.opacity(watermark.opacity);

	pdfKitDoc.save();

	var angle = Math.atan2(pdfKitDoc.page.height, pdfKitDoc.page.width) * -180 / Math.PI;
	pdfKitDoc.rotate(angle, {origin: [pdfKitDoc.page.width / 2, pdfKitDoc.page.height / 2]});

	var x = pdfKitDoc.page.width / 2 - watermark.size.size.width / 2;
	var y = pdfKitDoc.page.height / 2 - watermark.size.size.height / 4;

	pdfKitDoc._font = watermark.font;
	pdfKitDoc.fontSize(watermark.size.fontSize);
	pdfKitDoc.text(watermark.text, x, y, {lineBreak: false});

	pdfKitDoc.restore();
}

function renderVector(vector, pdfKitDoc) {
	//TODO: pdf optimization (there's no need to write all properties everytime)
	pdfKitDoc.lineWidth(vector.lineWidth || 1);
	if (vector.dash) {
		pdfKitDoc.dash(vector.dash.length, {space: vector.dash.space || vector.dash.length, phase: vector.dash.phase || 0});
	} else {
		pdfKitDoc.undash();
	}
	pdfKitDoc.lineJoin(vector.lineJoin || 'miter');
	pdfKitDoc.lineCap(vector.lineCap || 'butt');

	//TODO: clipping

	switch (vector.type) {
		case 'ellipse':
			pdfKitDoc.ellipse(vector.x, vector.y, vector.r1, vector.r2);
			break;
		case 'rect':
			if (vector.r) {
				pdfKitDoc.roundedRect(vector.x, vector.y, vector.w, vector.h, vector.r);
			} else {
				pdfKitDoc.rect(vector.x, vector.y, vector.w, vector.h);
			}

			if (vector.linearGradient) {
				var gradient = pdfKitDoc.linearGradient(vector.x, vector.y, vector.x + vector.w, vector.y);
				var step = 1 / (vector.linearGradient.length - 1);

				for (var i = 0; i < vector.linearGradient.length; i++) {
					gradient.stop(i * step, vector.linearGradient[i]);
				}

				vector.color = gradient;
			}
			break;
		case 'line':
			pdfKitDoc.moveTo(vector.x1, vector.y1);
			pdfKitDoc.lineTo(vector.x2, vector.y2);
			break;
		case 'polyline':
			if (vector.points.length === 0) {
				break;
			}

			pdfKitDoc.moveTo(vector.points[0].x, vector.points[0].y);
			for (var i = 1, l = vector.points.length; i < l; i++) {
				pdfKitDoc.lineTo(vector.points[i].x, vector.points[i].y);
			}

			if (vector.points.length > 1) {
				var p1 = vector.points[0];
				var pn = vector.points[vector.points.length - 1];

				if (vector.closePath || p1.x === pn.x && p1.y === pn.y) {
					pdfKitDoc.closePath();
				}
			}
			break;
		case 'path':
			pdfKitDoc.path(vector.d);
			break;
	}

	if (vector.color && vector.lineColor) {
		pdfKitDoc.fillColor(vector.color, vector.fillOpacity || 1);
		pdfKitDoc.strokeColor(vector.lineColor, vector.strokeOpacity || 1);
		pdfKitDoc.fillAndStroke();
	} else if (vector.color) {
		pdfKitDoc.fillColor(vector.color, vector.fillOpacity || 1);
		pdfKitDoc.fill();
	} else {
		pdfKitDoc.strokeColor(vector.lineColor || 'black', vector.strokeOpacity || 1);
		pdfKitDoc.stroke();
	}
}

function renderImage(image, x, y, pdfKitDoc) {
	pdfKitDoc.image(image.image, image.x, image.y, {width: image._width, height: image._height});
	if (image.link) {
		pdfKitDoc.link(image.x, image.y, image._width, image._height, image.link);
	}
}

function beginClip(rect, pdfKitDoc) {
	pdfKitDoc.save();
	pdfKitDoc.addContent('' + rect.x + ' ' + rect.y + ' ' + rect.width + ' ' + rect.height + ' re');
	pdfKitDoc.clip();
}

function endClip(pdfKitDoc) {
	pdfKitDoc.restore();
}

module.exports = PdfPrinter;


/* temporary browser extension */
PdfPrinter.prototype.fs = require('fs');


/***/ }),
/* 509 */,
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(1);
var hornet_js_utils_1 = __webpack_require__(0);
var React = __webpack_require__(2);
var hornet_page_1 = __webpack_require__(40);
var form_1 = __webpack_require__(311);
var row_1 = __webpack_require__(347);
var input_field_1 = __webpack_require__(290);
var calendar_field_1 = __webpack_require__(348);
var button_1 = __webpack_require__(97);
var buttons_area_1 = __webpack_require__(309);
var upload_file_field_1 = __webpack_require__(342);
var datasource_1 = __webpack_require__(306);
var notification_1 = __webpack_require__(49);
var schema = __webpack_require__(511);
var select_field_1 = __webpack_require__(343);
var notification_manager_1 = __webpack_require__(95);
var datasource_config_page_1 = __webpack_require__(316);
var icon_1 = __webpack_require__(103);
var picto_1 = __webpack_require__(96);
var radios_field_1 = __webpack_require__(488);
var logger = hornet_js_utils_1.Utils.getLogger("projet-hornet.views.admin.gen-form1-page");
var FormulaireDossierPage = /** @class */ (function (_super) {
    tslib_1.__extends(FormulaireDossierPage, _super);
    function FormulaireDossierPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.prefectures = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().getListePrefectures), { "value": "idPrefecture", "label": "prefecture" });
        _this.errors = new notification_manager_1.Notifications();
        _this.SequelizeErrors = new notification_manager_1.NotificationType();
        _this.SequelizeErrors.id = "SequelizeError";
        _this.errors.addNotification(_this.SequelizeErrors);
        _this.success = new notification_manager_1.Notifications();
        _this.SequelizeSuccess = new notification_manager_1.NotificationType();
        _this.SequelizeSuccess.id = "SequelizeSuccess";
        _this.SequelizeSuccess.text = "Opération réussie";
        _this.success.addNotification(_this.SequelizeSuccess);
        return _this;
    }
    FormulaireDossierPage.prototype.prepareClient = function () {
        this.prefectures.fetch(true);
    };
    FormulaireDossierPage.prototype.onSubmit = function (data) {
        var _this = this;
        this.getService().insererDonnee(data).then(function (result) {
            if (result.hasError != null) {
                console.error(result.hasReason);
                console.error(result.hasError);
                _this.SequelizeErrors.text = result.hasReason;
                notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
            }
            else {
                notification_manager_1.NotificationManager.notify("SequelizeSuccess", "notif", null, _this.success, null, null, null);
            }
        }).catch(function (error) {
            _this.SequelizeErrors.text = error.toString();
            notification_manager_1.NotificationManager.notify("SequelizeError", "errors", _this.errors, null, null, null, null);
        });
    };
    FormulaireDossierPage.prototype.render = function () {
        var format = this.i18n("forms");
        var radioData = new datasource_1.DataSource([
            { "value": 0, "label": "M" },
            { "value": 1, "label": "F" }
        ]);
        return (React.createElement("div", null,
            React.createElement(icon_1.Icon, { src: picto_1.Picto.blue.previous, alt: "Retourner \u00E0 la page de s\u00E9lection", title: "Retourner \u00E0 la page de s\u00E9lection", action: this.retourPage }),
            React.createElement("h2", null, "Formulaire d'entr\u00E9e d'un dossier"),
            React.createElement(notification_1.Notification, { id: "errors" }),
            React.createElement(notification_1.Notification, { id: "notif" }),
            React.createElement(form_1.Form, { id: "form1", schema: schema, onSubmit: this.onSubmit, formMessages: format },
                React.createElement(row_1.Row, null,
                    React.createElement(radios_field_1.RadiosField, { name: "id_sexe", label: "Sexe", dataSource: radioData, defaultValue: { "value": 0 } })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "nom", label: format.fields.nom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "prenom", label: format.fields.prenom.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_naissance", label: format.fields.date_de_naissance.label, title: format.fields.date_de_naissance.title, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "pays_de_naissance", label: format.fields.pays_de_naissance.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "ville_de_naissance", label: format.fields.ville_de_naissance.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "num_permis", label: format.fields.num_permis.label, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_permis", label: format.fields.copie_permis.label, buttonLabel: format.fields.copie_permis.buttonLabel, fileSelectedLabel: format.fields.copie_permis.fileSelectedLabel, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(calendar_field_1.CalendarField, { name: "date_de_delivrance", label: format.fields.date_de_delivrance.label, title: format.fields.date_de_delivrance.title, required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(select_field_1.SelectField, { dataSource: this.prefectures, label: format.fields.id_prefecture.label, name: "id_prefecture", required: true })),
                React.createElement(row_1.Row, null,
                    React.createElement(upload_file_field_1.UploadFileField, { name: "copie_note_verbale_maeci", label: format.fields.copie_note_verbale_maeci.label, buttonLabel: format.fields.copie_note_verbale_maeci.buttonLabel, fileSelectedLabel: format.fields.copie_note_verbale_maeci.fileSelectedLabel, required: true })),
                React.createElement(buttons_area_1.ButtonsArea, null,
                    React.createElement(button_1.Button, { type: "submit", value: "Valider", className: "hornet-button", label: "valider", title: "valider" })))));
    };
    FormulaireDossierPage.prototype.retourPage = function () {
        this.navigateTo("/fvmrecord", {}, function () { });
    };
    return FormulaireDossierPage;
}(hornet_page_1.HornetPage));
exports.FormulaireDossierPage = FormulaireDossierPage;



/***/ }),
/* 511 */
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/schema#",
	"title": "Formulaire d'entrée d'une demande d'authentification",
	"description": "Validation des données de formulaire",
	"type": "object",
	"required": [
		"nom",
		"prenom",
		"date_de_naissance",
		"ville_de_naissance",
		"pays_de_naissance",
		"num_permis",
		"copie_permis",
		"date_de_delivrance",
		"id_prefecture",
		"copie_note_verbale_maeci"
	],
	"properties": {
		"nom": {
			"$ref": "#/definition/nom_propre"
		},
		"prenom": {
			"$ref": "#/definition/nom_propre"
		},
		"date_de_naissance": {
			"$ref": "#/definition/date"
		},
		"ville_de_naissance": {
			"$ref": "#/definition/nom_propre"
		},
		"pays_de_naissance": {
			"$ref": "#/definition/nom_propre"
		},
		"date_de_delivrance": {
			"$ref": "#/definition/date"
		}
	},
	"definition": {
		"nom_propre": {
			"type": "string",
			"pattern": "^([a-zA-ZÀ-ÿ]+[-]{0,2}[a-zA-ZÀ-ÿ]+ ?)*$"
		},
		"date": {
			"type": "Date",
			"format": "date"
		}
	}
};

/***/ })
]));
//# sourceMappingURL=4.js.map