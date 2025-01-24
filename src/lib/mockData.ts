import { ChatT } from '../types/Chat'

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
				text: 'Hope you find your next role soon!',
				timestamp: {
					seconds: Math.floor(Date.now() / 1000),
					nanoseconds: 0,
				},
				user: {
					displayName: 'Alice Wonderland',
					photoURL: 'https://randomuser.me/api/portraits/women/7.jpg',
					uid: 3,
				},
			},
			{
				text: "You're going to crush it! Let's chat sometime about opportunities!",
				timestamp: {
					seconds: Math.floor(Date.now() / 1000),
					nanoseconds: 0,
				},
				user: {
					displayName: 'Bill Gates',
					photoURL: 'https://randomuser.me/api/portraits/men/8.jpg',
					uid: 4,
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
				text: 'Let me know if you need help with job search!',
				timestamp: {
					seconds: Math.floor(Date.now() / 1000),
					nanoseconds: 0,
				},
				user: {
					displayName: 'John Doe',
					photoURL: 'https://randomuser.me/api/portraits/men/1.jpg',
					uid: 5,
				},
			},
			{
				text: 'Best of luck! Networking is key—let me know if I can help with introductions.',
				timestamp: {
					seconds: Math.floor(Date.now() / 1000),
					nanoseconds: 0,
				},
				user: {
					displayName: 'Sundar Pichai',
					photoURL: 'https://randomuser.me/api/portraits/men/5.jpg',
					uid: 6,
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
		comments: [],
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
		comments: [],
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
		comments: [],
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
		comments: 10,
		reposts: 15,
	},
	{
		name: 'Saddam Arbaa',
		optionHeadline:
			'Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB',
		imgUrl: 'https://avatars.githubusercontent.com/u/51326421?v=4',
		postContent: `▸ I Made LinkedIn Clone Application
▸ Project descriptions
A demo of LinkedIn Clone with the main functionality built with React Js, Redux (a mobile-friendly).
▸ Features
● Complete user authentication users can sign in, sign out
● Add post
▸ Tech Stack
● Client: React Js, Redux, Styled Component, Material-UI
● Server: Firebase Realtime Database, Firebase Google Authentication, Firebase Email, and password Authentication
▸ Hosting: hosted on Firebase hosting.
▸ GitHub Repo: https://github.com/saddamarbaa/LinkedIn-clone-app
▸ I would love to hear feedback from you please write me in the comment`,
		optionPostImage: '/images/my-app.png',
		likes: 140,
		comments: 12,
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
		comments: 12,
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
		comments: 7,
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
		comments: 9,
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
		comments: 14,
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
		comments: 10,
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
		comments: 12,
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
		comments: 15,
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
		comments: 13,
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
		comments: 12,
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
		comments: 15,
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
		comments: 16,
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
		comments: 14,
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
		comments: 13,
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
		comments: 16,
		reposts: 12,
	},
]
