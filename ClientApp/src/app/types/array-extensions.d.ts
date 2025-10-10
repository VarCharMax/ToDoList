export {}; // Mark as an external module to augment global scope
    declare global {
        interface Array<T> {
            DBSort(): T[];
        }
    }