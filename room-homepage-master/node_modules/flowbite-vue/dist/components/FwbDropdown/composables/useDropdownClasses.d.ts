import { type Ref } from 'vue';
import type { DropdownProps } from '../FwbDropdown.vue';
interface UseDropdownClassesProps {
    contentWrapper: Ref<HTMLDivElement | undefined>;
    isContentVisible: Ref<boolean>;
    props: DropdownProps;
}
export declare function useDropdownClasses({ contentWrapper, isContentVisible, props }: UseDropdownClassesProps): {
    contentStyles: Ref<string, string>;
    contentWrapperClasses: import("vue").ComputedRef<string>;
    triggerClasses: string;
    triggerSuffixClass: import("vue").ComputedRef<string>;
    triggerWrapperClasses: import("vue").ComputedRef<string>;
    wrapperClasses: import("vue").ComputedRef<string>;
};
export {};
