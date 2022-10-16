import { I18n } from 'i18n-js';
import memoize from 'lodash.memoize';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';

const translationGetters = {
  // lazy requires
  en: () => require('./en.json'),
  vi: () => require('./vi.json'),
};

export const i18n = new I18n();

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  // fallback if no available language fits
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } = RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters))
  || fallback;

  // clear translation cache
  translate.cache.clear();
  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.translations = {
    [languageTag]: translationGetters[languageTag](),
  };

  i18n.locale = languageTag;

  i18n.missingBehavior = 'guess';
};

export default translate;
