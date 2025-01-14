import { Pluralizer } from "./typing";
import { I18n } from "./I18n";
export declare const defaultPluralizer: Pluralizer;
export declare class Pluralization {
    private i18n;
    private registry;
    constructor(i18n: I18n);
    register(locale: string, pluralizer: Pluralizer): void;
    get(locale: string): Pluralizer;
}
