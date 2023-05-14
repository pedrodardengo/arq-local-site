import React from 'react'
import useOnScreen from '@/utils/useOnScreen'
import * as S from './styles'
import { VscChevronDown } from 'react-icons/vsc'
import { scrollToRef } from '@/utils/scrollToRef'
import { Textfit } from 'react-textfit'

const Statement = ({
	children,
	style,
	refToScrollOnChevronClick
}: {
	children: React.ReactNode
	style?: React.CSSProperties
	refToScrollOnChevronClick?: string
}) => {
	const statementRef = React.useRef<HTMLDivElement>(null)
	const [alreadyBeenSeen, setAlreadyBeenSeen] = React.useState(false)
	const isVisible = useOnScreen(statementRef)
	const statementBoxRef = React.useRef(null)
	React.useEffect(() => {
		if (isVisible) {
			setAlreadyBeenSeen(true)
		}
	}, [isVisible])
	let chevron = <></>
	if (refToScrollOnChevronClick) {
		chevron = (
			<S.ChevronDiv isEntireBoxVisible={isVisible}>
				<VscChevronDown
					size={50}
					onClick={() => {
						scrollToRef(refToScrollOnChevronClick)
					}}
				/>
			</S.ChevronDiv>
		)
	}
	return (
		<S.Wrapper isVisible={alreadyBeenSeen} style={style} ref={statementBoxRef}>
			<h1 ref={statementRef}>
				<Textfit mode="single" max={65}>
					{children}
				</Textfit>
			</h1>
			{chevron}
		</S.Wrapper>
	)
}

export default Statement
