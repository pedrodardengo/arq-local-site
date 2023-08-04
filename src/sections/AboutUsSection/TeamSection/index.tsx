import React from 'react'
import * as S from './styles'
import Title from '@/components/Title'
import axios from 'axios'
import { ProfileDTO } from '@/types/ProfileDTO'

const TeamSection = () => {
	const [profiles, setProfiles] = React.useState<ProfileDTO[]>([])
	const [profileHoveredIndex, setProfileHoveredIndex] = React.useState<
		number | null
	>(null)
	const getProfiles = () => {
		axios.get('/api/get-architects-profiles').then(function (response) {
			setProfiles(response.data)
		})
	}

	React.useEffect(() => {
		getProfiles()
		console.log(profiles)
	}, [])

	function setProfileImageOpacity(imageIndex: number) {
		if (profileHoveredIndex == null || profileHoveredIndex == imageIndex) {
			return 1
		}
		return 0.4
	}

	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleDiv>
					<Title>QUEM FAZ</Title>
					<br />
					<br />
					<h2>
						Somos pessoas trabalhando para viabilizar os desejos de outras
						pessoas.
					</h2>
				</S.TitleDiv>
				<S.ProfilesDiv>
					{profiles.map((profile, index) => {
						return (
							<div
								key={index}
								onMouseEnter={() => setProfileHoveredIndex(index)}
							>
								<img
									src={profile.image.url}
									alt={profile.image.alt}
									style={{ opacity: setProfileImageOpacity(index) }}
								/>
								<S.ProfileName>
									<p>{profile.description.title}</p>
								</S.ProfileName>
							</div>
						)
					})}
				</S.ProfilesDiv>
				<S.ProfileDescriptionDiv>
					{profiles.map((profile, index) => {
						return profile.description.text.map((text: string, i: number) => {
							return (
								<>
									<p
										key={i}
										style={{
											position: index == 0 ? 'relative' : 'absolute',
											opacity: profileHoveredIndex == index ? 1 : 0
										}}
									>
										{text}
									</p>
									{i + 1 != profile.description.text.length ? <br /> : ''}
								</>
							)
						})
					})}
				</S.ProfileDescriptionDiv>
			</S.Content>
		</S.Wrapper>
	)
}

export default TeamSection
