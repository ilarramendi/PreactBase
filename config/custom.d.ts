declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '*.scss' {
	export const styles: any;
}

declare namespace preact {
	interface Component {
		refs: Record<string, any>;
	}
}

declare module 'preact' {
	export = preact;
}
