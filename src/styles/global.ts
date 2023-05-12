import { createGlobalStyle } from 'styled-components'
import THEME from '@/styles/theme'

const GlobalStyles = createGlobalStyle`
	* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;

      ::selection {
        background-color: ${THEME.colors.accentColor};
        color: ${THEME.colors.secondaryColor}
      }

      -webkit-background-clip: padding-box;
      background-clip: padding-box;

      ::-webkit-scrollbar {
        width: 10px;
				color: transparent;
      }

      ::-webkit-scrollbar-track {
				background: linear-gradient(to right, white calc(50% - 0.5px), black, white calc(50% + 0.5px));
				background-size: 1px 100%;
				background-position: center;
				background-repeat: no-repeat;
      }

      ::-webkit-scrollbar-thumb {
        background: black;
      }


      p {
        font-weight: ${THEME.fontWeight.regular};
        font-size: ${THEME.fontSize.textDesktop}px;

        @media (max-width: ${THEME.screenSize.tablet}px) {
          font-size: ${THEME.fontSize.textTablet}px;
        }

        @media (max-width: ${THEME.screenSize.mobile}px) {
          font-size: ${THEME.fontSize.textMobile}px;
        }
      }
		h1 {
			font-weight: ${THEME.fontWeight.regular};
			font-size: ${THEME.fontSize.title1Desktop}px;
			font-family: ${THEME.fonts.secondaryFont};

			@media (max-width: ${THEME.screenSize.tablet}px) {
				font-size: ${THEME.fontSize.title1Tablet}px;
			}

			@media (max-width: ${THEME.screenSize.mobile}px) {
				font-size: ${THEME.fontSize.title1Mobile}px;
			}
		}

		h2 {
			font-weight: ${THEME.fontWeight.regular};
			font-size: ${THEME.fontSize.title2Desktop}px;

			@media (max-width: ${THEME.screenSize.tablet}px) {
				font-size: ${THEME.fontSize.title2Tablet}px;
			}

			@media (max-width: ${THEME.screenSize.mobile}px) {
				font-size: ${THEME.fontSize.title2Mobile}px;
			}
		}
		h3 {
			font-weight: ${THEME.fontWeight.semiBold};
			font-size: ${THEME.fontSize.title3Desktop}px;

			@media (max-width: ${THEME.screenSize.tablet}px) {
				font-size: ${THEME.fontSize.title3Tablet}px;
			}

			@media (max-width: ${THEME.screenSize.mobile}px) {
				font-size: ${THEME.fontSize.title3Mobile}px;
			}
		}

    }

	html {
		font-size: ${THEME.fontSize.textDesktop}px;

		@media (max-width: ${THEME.screenSize.tablet}px) {
			font-size: ${THEME.fontSize.textTablet}px;
		}

		@media (max-width: ${THEME.screenSize.mobile}px) {
			font-size: ${THEME.fontSize.textMobile}px;
		}
	}

	html, body, #__next {
		height: 100%;
	}

	body {
		font-family: 'Source Sans Pro', sans-serif;
		overflow-x: hidden;
	}

`

export default GlobalStyles
