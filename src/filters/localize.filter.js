import store from '../store';
import ru_RU from '../locales/ru-RU.json';
import en_US from '../locales/en-US.json';

const locales = {
    'ru-RU': ru_RU,
    'en-US': en_US,
};

export default function localizeFilter(key) {
    const locale = store.getters.info.locale || 'ru-RU';

    return locales[locale][key] || `[Localize error]: key ${key} not found`;
}
