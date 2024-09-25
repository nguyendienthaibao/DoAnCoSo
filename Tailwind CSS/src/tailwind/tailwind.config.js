const { default: plugin } = require('tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./src/**/*.{html,js}",
	
],
  theme: {
    extend: {
		fontFamily:{
		  'poppins': ['Poppins', 'sans-serif'],
		  'Shadow-Into-Light':['Shadow Into Light','sans-serif']
		},
		animation:{	
			'rung-lac':'runglac 3s ease-in-out infinite',
		},
		backgroundImage: {
			'DienBienPhutrenko':"URL('https://imgproxy7.tinhte.vn/HC76NhyPCd6YEonvQ1kCqzvsbdPhXlpum1nkifFejSE/rs:fill:400:400:0/plain/https://photo2.tinhte.vn/data/attachment-files/2020/05/5007015_chien_tranh_viet_nam-04.jpg')",
			
		},
		colors:{
			"aliceblue": [240, 248, 255],
			"bisque": [255, 228, 196],
			"black": [0, 0, 0],
			"blanchedalmond": [255, 235, 205],
			"blue": [0, 0, 255],  
			"deep-pink": [255,20,147],
			'green': [19,205,103],
      		'yellow': [255,200,44],
      		'gray-dark': [39, 52, 68],
      		'gray': [132, 146, 166],
      		'graylight': '#d3dce6',
			'tan':'#f5c26b',
			'dark-cyan-1':'#45818e',
			'Digital-water-l':'#74ebd5',
			'Digital-water-r':'#ACB6E5',
			'Red-India':'#cd5c5c',
		},
		blur:{
			'10px':'10px',
		},
		keyframes:{
			'runglac':{
				'0%': { transform: 'rotate(0.0deg)', },
          		'10%': { transform: 'rotate(14deg)' },
          		'20%': { transform: 'rotate(-8deg)' },
          		'30%': { transform: 'rotate(14deg)' },
          		'40%': { transform: 'rotate(-4deg)' },
          		'50%': { transform: 'rotate(10.0deg)' },
          		'60%': { transform: 'rotate(0.0deg)' },
          		'100%': { transform: 'rotate(0.0deg)' },
			},
		},
		gradientColorStops:{
			'thirdty':'30%',
		},
		lineHeight:{
			'trungbinh':'2.1'
		},
		fontSize:{
			'size15':'1.09rem'
		},
		height:{
			'232px':'232px',
			'300px':'300px',
			'400px':'400px',
			'550px':'550px',
		},
		inset:{
			'10px':'10px',
			'50px':'50px',
			'360px':'360px',
			'500px':'500px',
			'800px':'800px',
		},
		maxWidth:{
			'500px':'500px',

		},
		padding:{
			'140px':'140px',
			'8px':'8px',
			'10px':'10px',
			'16px':'16px',
		},
		scale:{
			'image-item-2':'2',
		},
		//===== Margin ====== //
		spacing:{
			'50px':'50px',
		},
		screens:{},
		transitionTimingFunction:{
			'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        	'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
		},
		width:{
			'one-hundred-pixel':'100px',
			'232':'232px',
			'360':'360px',
			'400':'400px',
			'640':'640px',
		},
	},
  },
  plugins: [
    require('tailwind-clip-path'),
    require('tailwind-scrollbar'),
  ],
}

