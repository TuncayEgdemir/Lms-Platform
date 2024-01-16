import type { AcceptProp, DropEvent, FileError } from "./types";
export declare const ErrorCode: {
    readonly FILE_INVALID_TYPE: "FILE_INVALID_TYPE";
    readonly FILE_TOO_LARGE: "FILE_TOO_LARGE";
    readonly FILE_TOO_SMALL: "FILE_TOO_SMALL";
    readonly TOO_MANY_FILES: "TOO_MANY_FILES";
};
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];
export declare const getInvalidTypeRejectionErr: (accept: string | string[]) => {
    code: "FILE_INVALID_TYPE";
    message: string;
};
export declare const getTooLargeRejectionErr: (maxSize: number) => {
    code: "FILE_TOO_LARGE";
    message: string;
};
export declare const getTooSmallRejectionErr: (minSize: number) => {
    code: "FILE_TOO_SMALL";
    message: string;
};
export declare function fileAccepted(file: File, accept: string | string[]): (boolean | {
    code: "FILE_INVALID_TYPE";
    message: string;
} | null)[];
export declare function fileMatchSize(file: File, minSize: number, maxSize: number): (boolean | {
    code: "FILE_TOO_LARGE";
    message: string;
})[] | (boolean | {
    code: "FILE_TOO_SMALL";
    message: string;
})[] | (boolean | null)[];
export declare function allFilesAccepted({ files, accept, minSize, maxSize, multiple, maxFiles, validator, }: {
    files: File[];
    accept: string | string[];
    minSize: number;
    maxSize: number;
    multiple: boolean;
    maxFiles: number;
    validator: (f: File) => FileError | FileError[] | null;
}): boolean;
export declare function isPropagationStopped(event: DropEvent): boolean;
export declare function isEvtWithFiles(event: DropEvent): boolean;
export declare function isKindFile<T>(item: T): boolean;
export declare function onDocumentDragOver(event: DragEvent): void;
export declare function isIeOrEdge(userAgent?: string): boolean;
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */
export declare function composeEventHandlers(...fns: (((...args: any[]) => any) | undefined)[]): (event: DropEvent, ...args: any[]) => boolean;
/**
 * canUseFileSystemAccessAPI checks if the [File System Access API](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)
 * is supported by the browser.
 * @returns {boolean}
 */
export declare function canUseFileSystemAccessAPI(): boolean;
/**
 * Convert the `{accept}` dropzone prop to the
 * `{types}` option for https://developer.mozilla.org/en-US/docs/Web/API/window/showOpenFilePicker
 *
 * @param {AcceptProp} accept
 * @returns {{accept: string[]}[]}
 */
export declare function pickerOptionsFromAccept(accept?: AcceptProp): {
    description: string;
    accept: {};
}[] | undefined;
/**
 * Convert the `{accept}` dropzone prop to an array of MIME types/extensions.
 * @param {AcceptProp} accept
 * @returns {string}
 */
export declare function acceptPropAsAcceptAttr(accept?: AcceptProp): string | undefined;
/**
 * Check if v is an exception caused by aborting a request (e.g window.showOpenFilePicker()).
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 */
export declare function isAbort(v: any): boolean;
/**
 * Check if v is a security error.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/DOMException.
 */
export declare function isSecurityError(v: any): boolean;
/**
 * Check if v is a MIME type string.
 *
 * See accepted format: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers.
 */
export declare function isMIMEType(v: string): boolean;
/**
 * Check if v is a file extension.
 */
export declare function isExt(v: string): boolean;
//# sourceMappingURL=utils.d.ts.map