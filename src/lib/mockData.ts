import { ChatT } from '../types/Chat'
import { Job } from '../types/job'

export const mockChats: ChatT[] = [
	{
		name: 'Elon Musk',
		photoUrl:
			'https://tse1.mm.bing.net/th?id=OIP.HQjU6VgBnh73dkZht68N-wHaGL&pid=Api&P=0&h=220',
		lastMessage: 'Excited about the new Tesla launch!',
		lastMessageTime: '2025-01-19T12:00:00Z', // Add a timestamp
		id: 1,
	},
	{
		name: 'Barack Obama',
		photoUrl:
			'https://s.yimg.com/fz/api/res/1.2/FLjdMsYTqgpS8k2eJPuOMw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cHhvZmY9MDtweW9mZj0wO3E9ODA7dz0yMjA-/https://s.yimg.com/zb/imgv1/988510c5-a5e9-3eb6-8070-0501ee662c94/t_500x300',
		lastMessage: 'Let’s grab lunch sometime soon.',
		lastMessageTime: '2025-01-19T13:00:00Z', // Add a timestamp
		id: 2,
	},
	{
		name: 'Mark Zuckerberg',
		photoUrl:
			'https://s.yimg.com/fz/api/res/1.2/LZsGa7n7RXzbtHEEPdPxTw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE0Ng--/https://s.yimg.com/zb/imgv1/5dbcaead-30ea-3393-9444-7fa749d6230e/t_500x300',
		lastMessage: 'The new album is almost ready!',
		lastMessageTime: '2025-01-19T14:00:00Z', // Add a timestamp
		id: 3,
	},
	{
		name: 'Oprah Winfrey',
		photoUrl:
			'https://tse4.mm.bing.net/th?id=OIP.RHXBWSGNGWCIApI4Xxxw_AHaDx&pid=Api&P=0&h=220',
		lastMessage: 'We need to discuss a new book club project.',
		lastMessageTime: '2025-01-19T15:00:00Z', // Add a timestamp
		id: 4,
	},
	{
		name: 'Bill Gates',
		photoUrl:
			'https://tse1.mm.bing.net/th?id=OIP.ItoiQk7Q6H62nARtIze9gwHaE7&pid=Api&P=0&h=220',
		lastMessage: 'Check out this new tech innovation.',
		lastMessageTime: '2025-01-19T16:00:00Z', // Add a timestamp
		id: 5,
	},
	{
		name: 'Kim Kardashian',
		photoUrl:
			'https://tse1.mm.bing.net/th?id=OIP.N-xTXoqGFDDrCmyiFcEcVgHaE8&pid=Api&P=0&h=220',
		lastMessage: 'Just launched a new skincare line!',
		lastMessageTime: '2025-01-19T17:00:00Z', // Add a timestamp
		id: 6,
	},
	{
		name: 'Rihanna',
		photoUrl:
			'https://tse3.mm.bing.net/th?id=OIP.poYIg0p0cqGeklV2W_jxHAHaE8&pid=Api&P=0&h=220',
		lastMessage: 'Let’s catch up soon, I miss you!',
		lastMessageTime: '2025-01-19T19:00:00Z', // Add a timestamp
		id: 8,
	},
]

export const fakeUsers = [
	{
		name: 'Everett',
		username: 'Everett.Reilly95',
		avatar: 'https://cdn.fakercloud.com/avatars/sawrb_128.jpg',
		email: 'Everett.Reilly95.Gerlach@gmail.com',
		dob: '1982-06-30T10:19:21.807Z',
		phone: '(803) 642-6327',
		address: {
			street: 'Dickinson Center',
			suite: 'Apt. 746',
			city: 'Wymanchester',
			zipcode: '66927',
			geo: {
				lat: '73.3270',
				lng: '108.5247',
			},
		},
		website: 'thurman.info',
		company: {
			name: 'Bayer, Murazik and Gottlieb',
			catchPhrase: 'Upgradable 6th generation circuit',
			bs: 'scale proactive niches',
		},
		id: 0,
	},
	{
		name: 'Valerie',
		username: 'Valerie_Marvin',
		avatar: 'https://cdn.fakercloud.com/avatars/falconerie_128.jpg',
		email: 'Valerie_Marvin_Flatley6@yahoo.com',
		dob: '1958-09-22T07:30:44.813Z',
		phone: '1-256-897-1523',
		address: {
			street: 'Chandler Wall',
			suite: 'Apt. 468',
			city: 'South Edward',
			zipcode: '60167-8264',
			geo: {
				lat: '-71.3149',
				lng: '-153.2936',
			},
		},
		website: 'loyal.info',
		company: {
			name: 'Nicolas - Kuhic',
			catchPhrase: 'Optimized zero defect Graphical User Interface',
			bs: 'empower distributed vortals',
		},
		id: 1,
	},
	{
		name: 'Gregg',
		username: 'Gregg6',
		avatar: 'https://cdn.fakercloud.com/avatars/evanshajed_128.jpg',
		email: 'Gregg6.Murray@gmail.com',
		dob: '1974-04-24T17:50:03.783Z',
		phone: '1-248-211-7223 x795',
		address: {
			street: 'Johns Crest',
			suite: 'Suite 465',
			city: 'East Susanna',
			zipcode: '63751',
			geo: {
				lat: '13.3309',
				lng: '151.7477',
			},
		},
		website: 'greyson.org',
		company: {
			name: 'Bashirian, Upton and Doyle',
			catchPhrase: 'Synergistic zero administration approach',
			bs: 'envisioneer one-to-one schemas',
		},
		id: 2,
	},
	{
		name: 'Maud',
		username: 'Maud_Jacobson9',
		avatar: 'https://cdn.fakercloud.com/avatars/jedbridges_128.jpg',
		email: 'Maud_Jacobson9.Boyer99@gmail.com',
		dob: '1961-11-28T02:45:29.061Z',
		phone: '959-536-5978 x33491',
		address: {
			street: 'Lockman Coves',
			suite: 'Apt. 070',
			city: 'Attleboro',
			zipcode: '83825-8167',
			geo: {
				lat: '9.9947',
				lng: '-90.8921',
			},
		},
		website: 'nina.biz',
		company: {
			name: 'Wiza - Kihn',
			catchPhrase: 'Enterprise-wide user-facing array',
			bs: 'engage bleeding-edge systems',
		},
		id: 3,
	},
	{
		name: 'Cade',
		username: 'Cade_Heaney59',
		avatar: 'https://cdn.fakercloud.com/avatars/ankitind_128.jpg',
		email: 'Cade_Heaney59.Krajcik@gmail.com',
		dob: '1981-01-03T14:21:24.238Z',
		phone: '(969) 494-9886',
		address: {
			street: 'Jordyn Island',
			suite: 'Suite 552',
			city: 'Beattytown',
			zipcode: '44210',
			geo: {
				lat: '-88.5353',
				lng: '103.5527',
			},
		},
		website: 'anthony.name',
		company: {
			name: 'Padberg - Dare',
			catchPhrase: 'Operative content-based orchestration',
			bs: 'harness proactive methodologies',
		},
		id: 4,
	},
	{
		name: 'Ted',
		username: 'Ted_Jast',
		avatar: 'https://cdn.fakercloud.com/avatars/brandclay_128.jpg',
		email: 'Ted_Jast_Rath63@gmail.com',
		dob: '1981-05-28T01:00:28.840Z',
		phone: '(643) 779-4889 x7964',
		address: {
			street: 'Noemy Pike',
			suite: 'Apt. 610',
			city: 'Smyrna',
			zipcode: '09137-1642',
			geo: {
				lat: '34.7664',
				lng: '7.1243',
			},
		},
		website: 'baron.name',
		company: {
			name: 'Veum, Smith and Pfeffer',
			catchPhrase: 'Total attitude-oriented focus group',
			bs: 'streamline efficient methodologies',
		},
		id: 5,
	},
	{
		name: 'Hector',
		username: 'Hector.Haley',
		avatar: 'https://cdn.fakercloud.com/avatars/themadray_128.jpg',
		email: 'Hector.Haley_Schoen@yahoo.com',
		dob: '1951-04-12T01:55:57.078Z',
		phone: '519-546-3484',
		address: {
			street: 'Ena Vista',
			suite: 'Suite 509',
			city: 'Rochester',
			zipcode: '14200-2605',
			geo: {
				lat: '-66.9962',
				lng: '162.0399',
			},
		},
		website: 'eugenia.info',
		company: {
			name: "O'Kon - Dare",
			catchPhrase: 'Enterprise-wide well-modulated methodology',
			bs: 'deploy bricks-and-clicks users',
		},
		id: 6,
	},
	{
		name: 'Tre',
		username: 'Tre62',
		avatar: 'https://cdn.fakercloud.com/avatars/VinThomas_128.jpg',
		email: 'Tre62_Wisoky@hotmail.com',
		dob: '1980-11-28T02:01:16.609Z',
		phone: '892.426.5360 x4295',
		address: {
			street: 'Linnea Pike',
			suite: 'Apt. 835',
			city: 'Parker',
			zipcode: '01000-3101',
			geo: {
				lat: '4.0154',
				lng: '-175.7375',
			},
		},
		website: 'jordyn.org',
		company: {
			name: 'Ratke Inc',
			catchPhrase: 'Innovative mission-critical standardization',
			bs: 'architect turn-key bandwidth',
		},
		id: 7,
	},
	{
		name: 'Raymond',
		username: 'Raymond_Herman46',
		avatar: 'https://cdn.fakercloud.com/avatars/klefue_128.jpg',
		email: 'Raymond_Herman4699@yahoo.com',
		dob: '1985-12-29T11:44:36.902Z',
		phone: '1-715-624-2961',
		address: {
			street: 'Ryan Forge',
			suite: 'Apt. 982',
			city: 'Kenyaport',
			zipcode: '76127',
			geo: {
				lat: '-73.8780',
				lng: '-37.4484',
			},
		},
		website: 'deonte.name',
		company: {
			name: 'Schimmel, Hodkiewicz and Smitham',
			catchPhrase: 'Upgradable eco-centric application',
			bs: 'optimize scalable applications',
		},
		id: 8,
	},
	{
		name: 'Wilton',
		username: 'Wilton_Nicolas21',
		avatar: 'https://cdn.fakercloud.com/avatars/perretmagali_128.jpg',
		email: 'Wilton_Nicolas21.Luettgen@yahoo.com',
		dob: '1945-03-08T19:41:30.511Z',
		phone: '1-905-275-7411 x573',
		address: {
			street: 'Towne Isle',
			suite: 'Suite 922',
			city: 'Rexstad',
			zipcode: '34037',
			geo: {
				lat: '-51.8081',
				lng: '-42.3931',
			},
		},
		website: 'mekhi.net',
		company: {
			name: "O'Connell Group",
			catchPhrase: 'Reactive system-worthy standardization',
			bs: 'seize seamless deliverables',
		},
		id: 9,
	},
	{
		name: 'Keaton',
		username: 'Keaton_Bechtelar',
		avatar: 'https://cdn.fakercloud.com/avatars/aka_james_128.jpg',
		email: 'Keaton_Bechtelar.Runte@yahoo.com',
		dob: '1984-02-27T17:16:26.288Z',
		phone: '711.295.2692',
		address: {
			street: 'Rodrigo Wells',
			suite: 'Apt. 296',
			city: 'Wavabury',
			zipcode: '36724-5403',
			geo: {
				lat: '-63.2973',
				lng: '36.7935',
			},
		},
		website: 'dejuan.org',
		company: {
			name: 'Tillman and Sons',
			catchPhrase: 'Stand-alone optimizing encryption',
			bs: 'architect viral e-markets',
		},
		id: 10,
	},
	{
		name: 'Marshall',
		username: 'Marshall35',
		avatar: 'https://cdn.fakercloud.com/avatars/croakx_128.jpg',
		email: 'Marshall35.Gorczany78@yahoo.com',
		dob: '1951-05-04T16:56:22.503Z',
		phone: '(552) 919-2459',
		address: {
			street: 'Sauer Turnpike',
			suite: 'Apt. 322',
			city: 'Lake Joannyshire',
			zipcode: '15527-3349',
			geo: {
				lat: '-20.8791',
				lng: '74.2830',
			},
		},
		website: 'anissa.net',
		company: {
			name: 'Heller LLC',
			catchPhrase: 'Visionary secondary archive',
			bs: 'streamline impactful deliverables',
		},
		id: 11,
	},
	{
		name: 'Kurtis',
		username: 'Kurtis.Goldner86',
		avatar: 'https://cdn.fakercloud.com/avatars/rdsaunders_128.jpg',
		email: 'Kurtis.Goldner86_Streich44@gmail.com',
		dob: '1950-11-24T01:01:03.459Z',
		phone: '864-232-3263',
		address: {
			street: 'Harvey Vista',
			suite: 'Apt. 606',
			city: 'South Laviniaborough',
			zipcode: '38254-8620',
			geo: {
				lat: '-54.1293',
				lng: '-16.6453',
			},
		},
		website: 'kirk.net',
		company: {
			name: 'Pfannerstill - Lebsack',
			catchPhrase: 'De-engineered 6th generation alliance',
			bs: 'repurpose rich platforms',
		},
		id: 12,
	},
	{
		name: 'Elenora',
		username: 'Elenora23',
		avatar: 'https://cdn.fakercloud.com/avatars/tanveerrao_128.jpg',
		email: 'Elenora23.Reilly@yahoo.com',
		dob: '1970-11-29T20:40:39.656Z',
		phone: '672.949.2157 x49354',
		address: {
			street: 'Kurtis Court',
			suite: 'Suite 022',
			city: 'Minot',
			zipcode: '34767-3084',
			geo: {
				lat: '89.5804',
				lng: '37.2235',
			},
		},
		website: 'kirk.org',
		company: {
			name: 'Quigley, Leuschke and Emmerich',
			catchPhrase: 'Function-based hybrid local area network',
			bs: 'expedite scalable channels',
		},
		id: 13,
	},
	{
		name: 'Sophie',
		username: 'Sophie.Pagac2',
		avatar: 'https://cdn.fakercloud.com/avatars/lanceguyatt_128.jpg',
		email: 'Sophie.Pagac2.West43@gmail.com',
		dob: '1988-06-27T20:28:18.626Z',
		phone: '898-225-2579 x728',
		address: {
			street: 'Rosendo Courts',
			suite: 'Suite 564',
			city: 'Port Boris',
			zipcode: '90928-2973',
			geo: {
				lat: '25.4292',
				lng: '116.6464',
			},
		},
		website: 'daphne.name',
		company: {
			name: 'King - Heidenreich',
			catchPhrase: 'Persistent zero tolerance neural-net',
			bs: 'deploy strategic initiatives',
		},
		id: 14,
	},
	{
		name: 'Julianne',
		username: 'Julianne.Lesch28',
		avatar: 'https://cdn.fakercloud.com/avatars/GavicoInd_128.jpg',
		email: 'Julianne.Lesch28.Powlowski61@hotmail.com',
		dob: '1978-10-17T11:12:40.998Z',
		phone: '(866) 935-7519 x317',
		address: {
			street: 'Carroll Loaf',
			suite: 'Suite 744',
			city: 'Schultzland',
			zipcode: '94154-1796',
			geo: {
				lat: '23.0763',
				lng: '-1.8734',
			},
		},
		website: 'ramona.name',
		company: {
			name: 'Bins - Wintheiser',
			catchPhrase: 'Synchronised 24/7 project',
			bs: 'productize cutting-edge mindshare',
		},
		id: 15,
	},
	{
		name: 'Joshuah',
		username: 'Joshuah_Maggio',
		avatar: 'https://cdn.fakercloud.com/avatars/amayvs_128.jpg',
		email: 'Joshuah_Maggio_Prosacco@gmail.com',
		dob: '1973-12-05T07:31:35.411Z',
		phone: '(804) 945-1127',
		address: {
			street: 'Alexa Cliffs',
			suite: 'Apt. 713',
			city: 'New Rosemarymouth',
			zipcode: '97761',
			geo: {
				lat: '35.3283',
				lng: '151.7149',
			},
		},
		website: 'wilbert.com',
		company: {
			name: 'Muller - Daugherty',
			catchPhrase: 'Focused next generation archive',
			bs: 'transform distributed platforms',
		},
		id: 16,
	},
]

export const mockPosts = [
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | React.js, Redux, Next.js, JavaScript, TypeScript, Node.js, Express, MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			"📢 I'm currently seeking a new role and would greatly appreciate any connections, advice, or opportunities you can offer. Thanks for your support! 🙏",
		optionPostImage: '/images/github-banner-01.jpg',
		likes: [],
		comments: [
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: Math.floor(Date.now() / 1000),
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://tse1.mm.bing.net/th?id=OIP.HQjU6VgBnh73dkZht68N-wHaGL&pid=Api&P=0&h=220',
					uid: 1,
				},
			},
			{
				text: "You got this! 🚀 Don't forget to network, there's always something bigger ahead! 🙌 #TechTalent",
				timestamp: {
					seconds: Math.floor(Date.now() / 1000),
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://s.yimg.com/fz/api/res/1.2/LZsGa7n7RXzbtHEEPdPxTw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0yMjA7cT04MDt3PTE0Ng--/https://s.yimg.com/zb/imgv1/5dbcaead-30ea-3393-9444-7fa749d6230e/t_500x300',
					lastMessage: 'The new album is almost ready!',
					uid: 2,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 75,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 91,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 28,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 57,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
		],
		reposts: [],
		id: 'randaom',
	},
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Rich Experienced Web Application Engineer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			'Hi everyone - I am looking for a new role and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer',
		optionPostImage: '/images/pprofilepic.jpg',
		likes: 105,
		comments: [
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Meg Whitman',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MegWhitman',
					uid: 38,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 64,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 49,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: "Keep pushing forward, you're almost there!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 70,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 87,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: 'Stay focused, big things are ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 43,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 32,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
		],
		reposts: 8,
	},
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			'Hi everyone - I am looking for a new role and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer',
		optionPostImage: '/images/profile.jpg',
		likes: 95,
		comments: [
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 56,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 41,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sergey Brin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SergeyBrin',
					uid: 39,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 84,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 54,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 58,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 28,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Meg Whitman',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MegWhitman',
					uid: 38,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 48,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 52,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
		],
		reposts: 6,
	},
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			'I am looking for a new role DM me on Linkedin (Saddam Arbaa) for any Remote or freelancing opportunities. Thank you in advance for any connections, advice, or opportunities you can offer',
		optionPostImage: '/images/LinkedIns.png',
		likes: 85,
		comments: [
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 32,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 73,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 57,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 94,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 75,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 52,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 64,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
		],
		reposts: 5,
	},
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			'Follow me on Github (saddamarbaa) for more React + Next Js projects implementation',
		optionPostImage: '/images/github.png',
		likes: 120,
		comments: [
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 57,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 73,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 32,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 75,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 52,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 35,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 81,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 64,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
		],
		reposts: 10,
	},
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			'Follow me on Twitter (Web Development Coach | Saddam Arbaa) Today I coded 7 hrs 47 mins towards my @WakaTime goal of coding 1 hr per day except Saturday. https://wakatime.com/goals',
		optionPostImage: '/images/twiter.png',
		likes: 110,
		comments: [
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 56,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 87,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 49,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 35,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: 'Stay focused, big things are ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 43,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 30,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 64,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 28,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 32,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 91,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 84,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
		],
		reposts: 11,
	},
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent: '“mentor” DM me on Instagram (saddam.dev) for 1-1 mentoring',
		optionPostImage: '/images/instgram.png',
		likes: 130,
		comments: [
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 73,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Meg Whitman',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MegWhitman',
					uid: 38,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 94,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 44,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 79,
				},
			},
			{
				text: 'Stay focused, big things are ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 43,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 49,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 54,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
		],
		reposts: 15,
	},
	{
		name: 'Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			'▸ I Made LinkedIn Clone Application\n▸ Project descriptions\nA demo of LinkedIn Clone with the main functionality built with React Js, Redux (a mobile-friendly).\n▸ Features\n● Complete user authentication users can sign in, sign out\n● Add post\n▸ Tech Stack\n● Client: React Js, Redux, Styled Component, Material-UI\n● Server: Firebase Realtime Database, Firebase Google Authentication, Firebase Email, and password Authentication\n▸ Hosting: hosted on Firebase hosting.\n▸ GitHub Repo: https://github.com/saddamarbaa/LinkedIn-clone-app\n▸ I would love to hear feedback from you please write me in the comment',
		optionPostImage: '/images/my-app.png',
		likes: 140,
		comments: [
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: 'Stay focused, big things are ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 43,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 35,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 41,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 50,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 30,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 56,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 58,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 94,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 54,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 40,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 48,
				},
			},
		],
		reposts: 17,
	},
	{
		name: 'Web Development Coach | Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			'I just finished learning about React Context API and how it can help simplify state management! Have you tried using Context API or are you a Redux fan?',
		optionPostImage: '/images/redux.png',
		likes: 150,
		comments: [
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 35,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 32,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 50,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 91,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 98,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 28,
				},
			},
		],
		reposts: 10,
	},
	{
		name: 'JavaScript Enthusiast | Sarah Parker',
		optionHeadline:
			'Front-End Developer | JavaScript | TypeScript | React | Node.js',
		imgUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
		postContent:
			'JavaScript Tip: Did you know that you can destructure objects directly in function parameters? Makes the code super clean!',
		optionPostImage: 'images/javascript.webp',
		likes: 90,
		comments: [
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 30,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 54,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 40,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 48,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 73,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 64,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 56,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sergey Brin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SergeyBrin',
					uid: 39,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
		],
		reposts: 6,
	},
	{
		name: 'Backend Developer | John Doe',
		optionHeadline: 'Node.js | Express.js | MongoDB | API Development',
		imgUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
		postContent:
			"Learning Node.js has completely changed how I build web applications. It's amazing how easily you can handle async operations with Promises and async/await.",
		optionPostImage: 'images/node.webp',
		likes: 110,
		comments: [
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 57,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 73,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 50,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 40,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 75,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 85,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 56,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 81,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 48,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 32,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 49,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 58,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
		],
		reposts: 5,
	},
	{
		name: 'Tech Lead | Emma Watson',
		optionHeadline: 'Full-Stack Developer | TypeScript | React | GraphQL',
		imgUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
		postContent:
			"Today I tried TypeScript in one of my projects, and I'm blown away by the type safety it provides. Any tips on integrating it smoothly into large-scale React apps?",
		optionPostImage: '/images/typescript.png',
		likes: 180,
		comments: [
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 98,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 79,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 49,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 85,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 87,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 28,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 75,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sergey Brin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SergeyBrin',
					uid: 39,
				},
			},
		],
		reposts: 12,
	},
	{
		name: 'Web Developer | Alex Johnson',
		optionHeadline: 'React | Next.js | JavaScript | Firebase',
		imgUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
		postContent:
			'Just launched a new project using Next.js with static site generation (SSG) and Firebase backend! Check it out here: https://my-nextjs-project.com',
		optionPostImage: '/images/next.png',
		likes: 130,
		comments: [
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 84,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Meg Whitman',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MegWhitman',
					uid: 38,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 44,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 98,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 58,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sergey Brin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SergeyBrin',
					uid: 39,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 75,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 52,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Stay focused, big things are ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 43,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 41,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
		],
		reposts: 7,
	},
	{
		name: 'Web Developer | Lucy Adams',
		optionHeadline: 'JavaScript | TypeScript | React | Node.js | API Design',
		imgUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
		postContent:
			'JavaScript async/await saved me so much time today! Anyone else loves the simplicity it brings over callbacks?',
		optionPostImage: 'images/javascript.webp',
		likes: 140,
		comments: [
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 64,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 87,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 54,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 84,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 98,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 56,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 50,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
		],
		reposts: 9,
	},
	{
		name: 'Software Engineer | Saddam Arbaa',
		optionHeadline:
			'Web Development Coach | React | JavaScript | TypeScript | Node.js',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent:
			"If you're learning JavaScript, I highly recommend diving deep into Promises and async/await. Understanding asynchronous programming is essential for any JS dev!",
		optionPostImage: '/images/javascript.webp',
		likes: 175,
		comments: [
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 75,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 34,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 44,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 87,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Stay focused, big things are ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 43,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: "Keep pushing forward, you're almost there!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 70,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 73,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 58,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Meg Whitman',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MegWhitman',
					uid: 38,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
		],
		reposts: 12,
	},
	{
		name: 'Full-Stack Developer | Alex Thompson',
		optionHeadline: 'React | TypeScript | Node.js | Express',
		imgUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
		postContent:
			'I’ve been diving into TypeScript with React lately. Types are such a huge help for managing large projects. Anyone else using it in production?',
		optionPostImage: '/images/typescript.png',
		likes: 180,
		comments: [
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 40,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 91,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 97,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 64,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 72,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 48,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 35,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 49,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 98,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 85,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sergey Brin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SergeyBrin',
					uid: 39,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 81,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Meg Whitman',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MegWhitman',
					uid: 38,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 50,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 54,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 79,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
		],
		reposts: 10,
	},
	{
		name: 'Software Engineer | John Carter',
		optionHeadline: 'Python | JavaScript | Cloud Computing',
		imgUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
		postContent:
			'Started learning Python for backend development. It’s incredibly simple but powerful. Any suggestions on how to integrate Python with React?',
		optionPostImage: '/images/python.jpeg',
		likes: 150,
		comments: [
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 83,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: "Keep pushing forward, you're almost there!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 70,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 56,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 84,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: 'Stay focused, big things are ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 43,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 44,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 35,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 52,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 87,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 94,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 57,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 28,
				},
			},
		],
		reposts: 9,
	},
	{
		name: 'Software Developer | James Scott',
		optionHeadline: 'JavaScript | Node.js | TypeScript | MongoDB',
		imgUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
		postContent:
			'Incorporating TypeScript into my Node.js backend has made debugging and development so much smoother. Highly recommend it!',
		optionPostImage: '/images/typescript.png',
		likes: 180,
		comments: [
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 28,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 62,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Evan Spiegel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=EvanSpiegel',
					uid: 63,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 41,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 24,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 30,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sergey Brin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SergeyBrin',
					uid: 39,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 93,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 25,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 45,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 81,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 18,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
		],
		reposts: 11,
	},
	{
		name: 'Web Developer | Lily White',
		optionHeadline: 'Frontend Development | React | CSS | Web Design',
		imgUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
		postContent:
			'Exploring CSS Grid for responsive design. It’s such a powerful tool for building complex layouts. Anyone else using it in production?',
		optionPostImage: '/images/css.png',
		likes: 190,
		comments: [
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 53,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 84,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jack Dorsey',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JackDorsey',
					uid: 5,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 100,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 57,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 91,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 73,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 21,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Max Levchin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MaxLevchin',
					uid: 27,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 11,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 81,
				},
			},
		],
		reposts: 13,
	},
	{
		name: 'Full-Stack Engineer | Tom Johnson',
		optionHeadline: 'Node.js | React | TypeScript | AWS',
		imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
		postContent:
			"I’m diving into AWS Lambda and serverless architecture for my Node.js apps. It's been a fun journey so far. Anyone else working on serverless projects?",
		optionPostImage: '/images/swas.jpg',
		likes: 160,
		comments: [
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 22,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Elon Musk',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ElonMusk',
					uid: 85,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Meg Whitman',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MegWhitman',
					uid: 38,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Emily Weiss',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=EmilyWeiss',
					uid: 16,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 59,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 30,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sergey Brin',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SergeyBrin',
					uid: 39,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Safra Catz',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SafraCatz',
					uid: 74,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 58,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 19,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: 'Your journey is inspiring, keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 1,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 47,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 54,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 9,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 90,
				},
			},
		],
		reposts: 9,
	},
	{
		name: 'Frontend Developer | Emily Baker',
		optionHeadline: 'React | JavaScript | Web Design | UI/UX',
		imgUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
		postContent:
			'I just built my first custom React hook to handle form inputs and validation. It made the code much cleaner! Anyone else building custom hooks?',
		optionPostImage: '/images/react.webp',
		likes: 170,
		comments: [
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 35,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 71,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Angela Ahrendts',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AngelaAhrendts',
					uid: 10,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 80,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Stay strong, success is within reach!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 36,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 40,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 49,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Diane Greene',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=DianeGreene',
					uid: 65,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 33,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 66,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 96,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 78,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 44,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 87,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 30,
				},
			},
			{
				text: "Good things are coming, don't give up!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 42,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Michael Seibel',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MichaelSeibel',
					uid: 69,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Brian Chesky',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=BrianChesky',
					uid: 51,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: 'Your hard work will pay off soon!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 12,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 17,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 61,
				},
			},
			{
				text: 'Amazing progress, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Indra Nooyi',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=IndraNooyi',
					uid: 8,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 6,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
			{
				text: 'Great attitude, keep up the momentum!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 89,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: 'Keep up the great work!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 41,
				},
			},
			{
				text: 'You’re going to do amazing things!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Andrew Wilson',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=AndrewWilson',
					uid: 46,
				},
			},
		],
		reposts: 10,
	},
	{
		name: 'Software Engineer | Liam Gray',
		optionHeadline: 'Full-Stack Developer | JavaScript | Python | AWS',
		imgUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
		postContent:
			'I’m learning Python for data analysis and machine learning. Any advice for transitioning from full-stack development to data science?',
		optionPostImage: '/images/python.jpeg',
		likes: 190,
		comments: [
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Padmasree Warrior',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=PadmasreeWarrior',
					uid: 26,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sheryl Sandberg',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SherylSandberg',
					uid: 57,
				},
			},
			{
				text: 'Opportunities are closer than you think!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 58,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Kevin Systrom',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=KevinSystrom',
					uid: 14,
				},
			},
			{
				text: 'All the best in your journey!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 13,
				},
			},
			{
				text: 'Your hard work will pay off!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Rachel Holt',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RachelHolt',
					uid: 68,
				},
			},
			{
				text: "Believe in yourself, you're doing amazing!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Daniel Ek',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=DanielEk',
					uid: 77,
				},
			},
			{
				text: 'Impressive dedication! Keep going!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 37,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ginni Rometty',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=GinniRometty',
					uid: 50,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 94,
				},
			},
			{
				text: 'Keep reaching for the stars!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Reed Hastings',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ReedHastings',
					uid: 86,
				},
			},
			{
				text: 'This is just the beginning, great things ahead!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanWojcicki',
					uid: 44,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marissa Mayer',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=MarissaMayer',
					uid: 7,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Parag Agrawal',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ParagAgrawal',
					uid: 20,
				},
			},
			{
				text: "You're capable of achieving great things!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 82,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Anne Wojcicki',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=AnneWojcicki',
					uid: 92,
				},
			},
			{
				text: 'Great work so far, keep it up!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 23,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Larry Page',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=LarryPage',
					uid: 67,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Mark Zuckerberg',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarkZuckerberg',
					uid: 4,
				},
			},
			{
				text: "Wishing you the best, you're going to crush it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Marc Benioff',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=MarcBenioff',
					uid: 55,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 31,
				},
			},
			{
				text: 'Don’t give up, keep pushing!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Ruth Porat',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=RuthPorat',
					uid: 76,
				},
			},
			{
				text: 'You got this! 🚀',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Tim Cook',
					photoURL: 'https://avatar.iran.liara.run/public/boy?username=TimCook',
					uid: 29,
				},
			},
			{
				text: 'Stay positive, opportunities are on the way!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=SundarPichai',
					uid: 91,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Leah Busque',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=LeahBusque',
					uid: 2,
				},
			},
			{
				text: "You're making great strides, keep at it!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Susan Li',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=SusanLi',
					uid: 15,
				},
			},
			{
				text: 'Wishing you all the best!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 3,
				},
			},
			{
				text: "Network well, you'll find the right opportunity!",
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Jeff Bezos',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=JeffBezos',
					uid: 88,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Shantanu Narayen',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=ShantanuNarayen',
					uid: 60,
				},
			},
			{
				text: 'Remember, persistence is key! 💪',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Whitney Wolfe Herd',
					photoURL:
						'https://avatar.iran.liara.run/public/girl?username=WhitneyWolfe',
					uid: 95,
				},
			},
			{
				text: 'Good luck with your job search!',
				timestamp: {
					seconds: 1737782606,
					nanoseconds: 0,
				},
				user: {
					displayName: 'Stewart Butterfield',
					photoURL:
						'https://avatar.iran.liara.run/public/boy?username=StewartButterfield',
					uid: 99,
				},
			},
		],
		reposts: 12,
	},
]

const randomNames = [
	'John Smith',
	'Anna White',
	'James Johnson',
	'Emily Davis',
	'Michael Brown',
	'Sarah Wilson',
	'David Lee',
	'Sophia Clark',
	'Daniel Miller',
	'Olivia Walker',
]

export const mockedNotifications = Array.from({ length: 50 }, (_, index) => {
	const randomName = randomNames[Math.floor(Math.random() * randomNames.length)]
	const iconOptions: ['like', 'comment', 'connect', 'share', 'endorse'] = [
		'like',
		'comment',
		'connect',
		'share',
		'endorse',
	]
	const icon = iconOptions[index % iconOptions.length]

	return {
		id: index + 1,
		title:
			index % 5 === 0
				? `New connection request from ${randomName}`
				: index % 3 === 0
				? `${randomName} liked your post about JavaScript`
				: index % 4 === 0
				? `${randomName} commented on your post`
				: `${randomName} shared your job posting`,
		time: `${Math.floor(Math.random() * 60)} minutes ago`,
		icon: icon,
	}
})

export const mockedJobs: Job[] = [
	{
		id: 1,
		title: 'Software Engineer',
		company: 'Google',
		location: 'Remote',
		description:
			"Join Google's team to develop innovative products and work on cutting-edge technologies.",
		postedTime: '5 days ago',
		status: 'open',
	},
	{
		id: 19,
		title: 'Cloud Solutions Engineer',
		company: 'Microsoft Azure',
		location: 'Redmond, WA',
		description:
			'Join Microsoft Azure to develop and manage scalable cloud solutions for enterprise clients.',
		postedTime: '14 days ago',
		status: 'closed',
	},
	{
		id: 20,
		title: 'Full Stack Engineer',
		company: 'GitHub',
		location: 'San Francisco, CA',
		description:
			"Help build and scale GitHub's tools, making development and collaboration easier for developers worldwide.",
		postedTime: '8 days ago',
		status: 'pending',
	},
	{
		id: 2,
		title: 'Senior Software Engineer',
		company: 'Amazon',
		location: 'Seattle, WA',
		description:
			'Work on large-scale systems at Amazon, building features that scale across millions of users.',
		postedTime: '8 days ago',
		status: 'open',
	},
	{
		id: 3,
		title: 'Software Engineer II',
		company: 'Microsoft',
		location: 'Redmond, WA',
		description:
			'Develop software solutions that impact millions of users globally at Microsoft.',
		postedTime: '12 days ago',
		status: 'open',
	},
	{
		id: 4,
		title: 'Backend Developer',
		company: 'Facebook',
		location: 'Menlo Park, CA',
		description:
			"Build the backend services that power Facebook's features and handle millions of requests.",
		postedTime: '7 days ago',
		status: 'open',
	},
	{
		id: 5,
		title: 'Full Stack Developer',
		company: 'Apple',
		location: 'Cupertino, CA',
		description:
			'Work on both the front-end and back-end at Apple, developing software for world-class products.',
		postedTime: '2 weeks ago',
		status: 'pending',
	},
	{
		id: 6,
		title: 'Software Engineer',
		company: 'Netflix',
		location: 'Los Gatos, CA',
		description:
			"Join Netflix's tech team to develop and improve software for its global streaming platform.",
		postedTime: '4 days ago',
		status: 'open',
	},
	{
		id: 7,
		title: 'Cloud Engineer',
		company: 'Salesforce',
		location: 'San Francisco, CA',
		description:
			'Develop cloud-based solutions that help businesses transform their operations at Salesforce.',
		postedTime: '10 days ago',
		status: 'closed',
	},
	{
		id: 8,
		title: 'DevOps Engineer',
		company: 'Spotify',
		location: 'Remote',
		description:
			"Build and maintain scalable, efficient DevOps pipelines to support Spotify's infrastructure.",
		postedTime: '3 weeks ago',
		status: 'open',
	},
	{
		id: 9,
		title: 'Front-End Developer',
		company: 'Snapchat',
		location: 'Los Angeles, CA',
		description:
			"Work on developing new features and user interfaces for Snapchat's mobile app.",
		postedTime: '15 days ago',
		status: 'pending',
	},
	{
		id: 10,
		title: 'Mobile Developer',
		company: 'Uber',
		location: 'San Francisco, CA',
		description:
			"Develop mobile applications for Uber's services, enhancing user experiences globally.",
		postedTime: '6 days ago',
		status: 'open',
	},
	{
		id: 11,
		title: 'Junior Software Engineer',
		company: 'Twilio',
		location: 'Remote',
		description:
			"Join Twilio's team to build next-generation communication tools for global businesses.",
		postedTime: '1 week ago',
		status: 'open',
	},
	{
		id: 12,
		title: 'Data Scientist',
		company: 'LinkedIn',
		location: 'Sunnyvale, CA',
		description:
			"Work with LinkedIn's data to help improve user experiences and business intelligence.",
		postedTime: '5 days ago',
		status: 'pending',
	},
	{
		id: 13,
		title: 'Senior Product Manager',
		company: 'Slack',
		location: 'San Francisco, CA',
		description:
			'Lead product development efforts at Slack, enhancing collaboration tools for businesses.',
		postedTime: '12 days ago',
		status: 'open',
	},
	{
		id: 14,
		title: 'UX Designer',
		company: 'Dropbox',
		location: 'Remote',
		description:
			'Design intuitive and user-friendly interfaces for Dropbox’s file-sharing platform.',
		postedTime: '20 days ago',
		status: 'closed',
	},
	{
		id: 15,
		title: 'Software Engineer',
		company: 'Pinterest',
		location: 'San Francisco, CA',
		description:
			"Work on Pinterest's core systems and help build the next generation of visual discovery tools.",
		postedTime: '3 days ago',
		status: 'open',
	},
	{
		id: 16,
		title: 'Machine Learning Engineer',
		company: 'Stripe',
		location: 'Remote',
		description:
			"Build AI-powered features for Stripe's platform, helping businesses optimize their operations.",
		postedTime: '1 week ago',
		status: 'pending',
	},
	{
		id: 17,
		title: 'Software Engineer',
		company: 'Airbnb',
		location: 'San Francisco, CA',
		description:
			'Develop backend services and APIs for Airbnb’s global platform.',
		postedTime: '2 weeks ago',
		status: 'open',
	},
	{
		id: 18,
		title: 'Web Developer',
		company: 'Zillow',
		location: 'Remote',
		description:
			'Build and maintain web applications to help users find their next home on Zillow.',
		postedTime: '10 days ago',
		status: 'open',
	},
	{
		id: 21,
		title: 'Software Engineer',
		company: 'Google',
		location: 'Remote',
		description:
			'Design and implement Google Cloud solutions, impacting millions of users.',
		postedTime: '9 days ago',
		status: 'open',
	},
	{
		id: 22,
		title: 'Data Analyst',
		company: 'Amazon',
		location: 'Seattle, WA',
		description:
			'Analyze large datasets to derive insights and improve customer experience at Amazon.',
		postedTime: '5 days ago',
		status: 'open',
	},
	{
		id: 23,
		title: 'Senior Software Engineer',
		company: 'Facebook',
		location: 'Menlo Park, CA',
		description:
			'Build and scale Facebook’s backend infrastructure to support billions of users.',
		postedTime: '12 days ago',
		status: 'closed',
	},
	{
		id: 24,
		title: 'System Architect',
		company: 'Apple',
		location: 'Cupertino, CA',
		description:
			"Join Apple's engineering team to design scalable and efficient system architectures.",
		postedTime: '7 days ago',
		status: 'open',
	},
	{
		id: 25,
		title: 'Software Developer',
		company: 'Netflix',
		location: 'Los Gatos, CA',
		description:
			'Contribute to Netflix’s streaming platform by building scalable and reliable features.',
		postedTime: '15 days ago',
		status: 'pending',
	},
	{
		id: 26,
		title: 'Back-End Engineer',
		company: 'Spotify',
		location: 'Remote',
		description:
			'Build the backend systems that support Spotify’s massive music catalog and user data.',
		postedTime: '10 days ago',
		status: 'open',
	},
	{
		id: 27,
		title: 'Security Engineer',
		company: 'Google',
		location: 'Mountain View, CA',
		description:
			'Help Google enhance its security infrastructure and protect user data.',
		postedTime: '3 weeks ago',
		status: 'closed',
	},
	{
		id: 28,
		title: 'Cloud Infrastructure Engineer',
		company: 'Salesforce',
		location: 'San Francisco, CA',
		description:
			"Design and manage cloud infrastructure solutions for Salesforce's enterprise customers.",
		postedTime: '1 week ago',
		status: 'open',
	},
	{
		id: 29,
		title: 'Product Designer',
		company: 'Pinterest',
		location: 'San Francisco, CA',
		description:
			'Design and improve user interfaces that drive Pinterest’s product experiences.',
		postedTime: '2 weeks ago',
		status: 'pending',
	},
	{
		id: 30,
		title: 'Software Development Engineer',
		company: 'Amazon Web Services (AWS)',
		location: 'Seattle, WA',
		description:
			'Develop scalable services to enable AWS customers with the best cloud solutions.',
		postedTime: '4 days ago',
		status: 'open',
	},
]
