const BannerLoader = () => {
	return (
		<div className="fixed inset-0 z-50 flex h-dvh w-full flex-col items-center justify-center gap-2">
			<img src="/assets/images/tenpo-logo.svg" alt="logo" className="h-10 w-full" />
			<span className="border-v1-primary-500 size-8 animate-spin rounded-full border-2 border-b-transparent"></span>
		</div>
	);
};

export default BannerLoader;
