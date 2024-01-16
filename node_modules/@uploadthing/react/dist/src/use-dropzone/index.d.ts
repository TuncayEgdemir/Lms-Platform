/**
 * This is a forked version of the react-dropzone package.
 * See original source here: https://github.com/react-dropzone/react-dropzone
 * The original package is licensed under the MIT license.
 */
import type { DropzoneMethods, DropzoneOptions, DropzoneState } from "./types";
export * from "./types";
/**
 * A React hook that creates a drag 'n' drop area.
 *
 * ### Example
 *
 * ```tsx
 * function MyDropzone() {
 *   const { getRootProps, getInputProps } = useDropzone({
 *     onDrop: acceptedFiles => {
 *       // do something with the File objects, e.g. upload to some server
 *     }
 *   });
 *
 *   return (
 *     <div {...getRootProps()}>
 *       <input {...getInputProps()} />
 *       <p>Drag and drop some files here, or click to select files</p>
 *     </div>
 *   )
 * }
 * ```
 */
export declare function useDropzone(props: DropzoneOptions): DropzoneState & DropzoneMethods;
export { ErrorCode } from "./utils";
//# sourceMappingURL=index.d.ts.map