/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        fira: ['Fira Mono']
      },
      boxShadow: {
        btn: '4px 4px 0 0 #52D2B8',
        logo: 'rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgb(82, 210, 184) 4px 4px 0px 0px'
      }
    },
    colors: {
      white: '#ffffff',
      black: '#000000',
      primary: '#52D2B8',
      secondary: '#1D3A5F',
      offwhite: '#CCD6F6',
      fadedwhite: '#8892B0',
      bg: '#0A192F',
      darkblue: '#0A192F',
      bglight: '#112240'
    }
  },
  plugins: []
}
