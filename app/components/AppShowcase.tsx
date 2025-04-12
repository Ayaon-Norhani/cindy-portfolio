'use client';

interface App {
	id: number;
	name: string;
	description: string;
	technologies: string[];
	platforms: string[];
	
}

const apps: App[] = [
	{
		id: 1,
		name: 'Konek-To-Book',
		description:
			'A system designed to automate the library operations of MSU-ISED, enhance book search efficiency, and improve the management of records and borrowings',
		technologies: ['JavaScript', 'MySQL', 'Visual Studio Code'],
		platforms: ['Web', 'Android'],
	},
	{
		id: 2,
		name: 'S&S Grocery Store Automated POS & Inventory System',
		description:
			'An integrated system that automates sales, inventory tracking, and reporting for S&S Grocery Store, enhancing efficiency and accuracy in operations',
		technologies: ['Java', 'MySQL', 'Eclipse'],
		platforms: ['Web'],
	},
];

const AppShowcase = () => {
	return (
		<section className="py-16 md:py-20 relative">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
					{apps.map((app) => (
						<div key={app.id} className="group bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-xl sm:rounded-2xl p-1">
							<div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 relative h-[295px]">
								<div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
									{/* App Icon */}
									<div className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-1 flex-shrink-0">
										<div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden relative">
											{app.id === 1 ? (
												<svg className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M4 19.5A2.5 2.5 0 006.5 22H20M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5V4.5z" />
												</svg>
											) : (
												<svg className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
													<path strokeLinecap="round" strokeLinejoin="round" d="M3 9l1.5-6h15L21 9M3 9h18v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9zm5 5h4m-4 4h4m4-4h.01M7 13h.01" />
												</svg>
											)}
											<div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 animate-shimmer"></div>
										</div>
										<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
										<div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full blur-[2px]"></div>
									</div>

									{/* App Info */}
									<div className="flex-grow w-full sm:w-auto">
										<div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 mb-2">
											<h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors text-center sm:text-left break-words">{app.name}</h3>
											<span className="px-2 py-0.5 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
												{app.id === 1 ? 'Featured' : 'New'}
											</span>
										</div>
										<p className="text-gray-400 mb-4 text-center sm:text-left">{app.description}</p>

										{/* Technologies */}
										<div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-8">
											{app.technologies.map((tech) => {
												let borderColor = '';

												switch (tech) {
													case 'JavaScript':
														borderColor = 'border-yellow-500/50 group-hover:border-yellow-400/70';
														break;
													case 'MySQL':
														borderColor = 'border-orange-500/50 group-hover:border-orange-400/70';
														break;
													case 'Visual Studio Code':
														borderColor = 'border-blue-500/50 group-hover:border-blue-400/70';
														break;
													case 'Java':
														borderColor = 'border-red-500/50 group-hover:border-red-400/70';
														break;
													case 'Eclipse':
														borderColor = 'border-purple-500/50 group-hover:border-purple-400/70';
														break;
													default:
														borderColor = 'border-gray-700/50 group-hover:border-gray-600/50';
												}

												return (
													<span
														key={tech}
														className={`px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 transition-colors border ${borderColor} whitespace-nowrap`}
													>
														{tech}
													</span>
												);
											})}
										</div>

										{/* Platforms */}
										<div className="flex items-center gap-1.5 text-sm text-gray-400 justify-center sm:justify-start">
											<svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
												<path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H8V11H16V13M16,9H8V7H16V9M7,24H9V22H7V24M11,24H13V22H11V24M15,24H17V22H15V24" />
											</svg>
											<span>{app.platforms.join(' & ')}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;
