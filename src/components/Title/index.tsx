import React from 'react'
import THEME from '@/styles/theme'

const Title = ({ color, children }: { color?: string; children: string }) => {
	const style: React.CSSProperties = {
		fontFamily: THEME.fonts.secondaryFont,
		color
	}
	return <h2 style={style}>{children}</h2>
}

export default Title
