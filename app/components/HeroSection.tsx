'use client';

import { motion } from 'framer-motion';

const HeroSection = () => {
	return (
		<section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
			<div className="absolute inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
				<div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
			</div>

			<div className="container mx-auto px-4 z-10">
				<motion.div
					className="text-center mb-8"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<div className="text-center mb-8">
						<span className="text-lg md:text-xl text-gray-400 mb-10 block">Hi, I&#39;m</span>
						<h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8">
							<span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
								Norhani Ayaon
							</span>
						</h1>

						<h2 className="text-lg sm:text-xl md:text-3xl font-semibold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
							Software Developer & Admin Support
						</h2>

						<p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
							Delivering seamless software solutions, efficient
							<span className="text-purple-400"> IT support</span>, and streamlined
							<span className="text-blue-400"> administrative assistance</span>
						</p>
					</div>
				</motion.div>

				{/* Featured App Preview */}
				<div className="max-w-lg mx-auto px-4">
					<div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-1 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

						<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden relative">
							<div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
								<svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
									<pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
										<path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
									</pattern>
									<rect width="100" height="100" fill="url(#grid)" />
								</svg>
							</div>

							<div className="relative p-8">
								{/* Badge */}
								<div className="flex justify-center">
									<div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 group-hover:border-blue-400/30 transition-colors">
										<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
										<span className="text-blue-400 text-sm font-medium">Featured Project</span>
									</div>
								</div>

								{/* App Info */}
								<div className="text-center mt-6">
									<h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
										Konek-To-Book
									</h3>
									<p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
										A system designed to automate the library operations of MSU-ISED, enhance book search efficiency, and improve the management of records and borrowings.
									</p>

									{/* Features Pills */}
									<div className="flex flex-wrap justify-center gap-2">
									{[
										{ label: 'JavaScript', border: 'border-yellow-500/50 group-hover:border-yellow-400/70' },
										{ label: 'MySQL', border: 'border-orange-500/50 group-hover:border-orange-400/70' },
										{ label: 'Visual Studio Code', border: 'border-blue-500/50 group-hover:border-blue-400/70' },
									].map((feature, index) => (
										<span
										key={index}
										className={`px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 transition-colors border ${feature.border}`}
										>
										{feature.label}
										</span>
									))}
									</div>

								</div>
							</div>

							{/* Decorative Corners */}
							<div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
								<div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
								<div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
							</div>
							<div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
								<div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
								<div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
