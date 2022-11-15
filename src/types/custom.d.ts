declare module '*.svg' {
	const content: any;
	export default content;
}

declare module '*.scss' {
	const styles: Record<string, string>;
	export default styles;
}

declare namespace preact {
	interface Component {
		refs: Record<string, any>;
	}
}

declare module 'preact' {
	export = preact;
}

declare module 'react/jsx-runtime' {}
