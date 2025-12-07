import styled, { keyframes } from 'styled-components'
import { ChevronDown, Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Heart } from 'lucide-react'
import { useState, useEffect } from 'react'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`

const PlayerOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: ${props => props.theme.colors.background};
  z-index: ${props => props.theme.zIndex.modal};
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  animation: ${fadeIn} 0.3s ease-out;
  overflow: hidden;
`

const BackgroundBlur = styled.div<{ $artwork: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$artwork});
  background-size: cover;
  background-position: center;
  filter: blur(60px);
  opacity: 0.3;
  z-index: 0;
`

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.xl};
`

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.overlay};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.black};
  }
`

const AlbumArtwork = styled.div`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  margin: 0 auto ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.radius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TrackInfo = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`

const TrackTitle = styled.h1`
  font-family: ${props => props.theme.fonts.accent};
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.white};
  margin-bottom: ${props => props.theme.spacing.sm};
`

const TrackArtist = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.lightGray};
`

const ProgressSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.xl};
`

const ProgressBar = styled.div`
  width: 100%;
  height: 4px;
  background: ${props => props.theme.colors.overlay};
  border-radius: ${props => props.theme.borderRadius.full};
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.sm};
`

const ProgressFill = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${props => props.$progress}%;
  background: ${props => props.theme.colors.primary};
  transition: width 0.3s ease-out;
  box-shadow: 0 0 10px ${props => props.theme.colors.primary};
`

const TimeLabels = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.lightGray};
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`

const SecondaryButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: transparent;
  color: ${props => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.white};
    background: ${props => props.theme.colors.overlay};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

const PlayButton = styled.button<{ $isPlaying: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};
  box-shadow: ${props => props.theme.shadow.glow};

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 28px;
    height: 28px;
  }
`

const Actions = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 ${props => props.theme.spacing.xl};
`

const ActionButton = styled.button<{ $active?: boolean }>`
  color: ${props => props.$active
        ? props.theme.colors.primary
        : props.theme.colors.lightGray};
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`

interface FullPlayerProps {
    isOpen: boolean
    onClose: () => void
    track: {
        title: string
        artist: string
        artwork: string
    }
}

export default function FullPlayer({ isOpen, onClose, track }: FullPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    // Simulate progress animation
    useEffect(() => {
        if (isPlaying) {
            const interval = setInterval(() => {
                setProgress(prev => (prev >= 100 ? 0 : prev + 0.5))
            }, 100)
            return () => clearInterval(interval)
        }
    }, [isPlaying])

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = Math.floor(seconds % 60)
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    const currentTime = Math.floor((progress / 100) * 180) // 3 min song
    const totalTime = 180

    return (
        <PlayerOverlay $isOpen={isOpen}>
            <BackgroundBlur $artwork={track.artwork} />

            <Content>
                <Header>
                    <CloseButton onClick={onClose}>
                        <ChevronDown />
                    </CloseButton>
                </Header>

                <AlbumArtwork>
                    <img src={track.artwork} alt={track.title} />
                </AlbumArtwork>

                <TrackInfo>
                    <TrackTitle>{track.title}</TrackTitle>
                    <TrackArtist>{track.artist}</TrackArtist>
                </TrackInfo>

                <ProgressSection>
                    <ProgressBar>
                        <ProgressFill $progress={progress} />
                    </ProgressBar>
                    <TimeLabels>
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(totalTime)}</span>
                    </TimeLabels>
                </ProgressSection>

                <Controls>
                    <SecondaryButton>
                        <Shuffle />
                    </SecondaryButton>
                    <SecondaryButton>
                        <SkipBack />
                    </SecondaryButton>
                    <PlayButton
                        $isPlaying={isPlaying}
                        onClick={() => setIsPlaying(!isPlaying)}
                    >
                        {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
                    </PlayButton>
                    <SecondaryButton>
                        <SkipForward />
                    </SecondaryButton>
                    <SecondaryButton>
                        <Repeat />
                    </SecondaryButton>
                </Controls>

                <Actions>
                    <ActionButton
                        $active={isLiked}
                        onClick={() => setIsLiked(!isLiked)}
                    >
                        <Heart fill={isLiked ? 'currentColor' : 'none'} />
                    </ActionButton>
                </Actions>
            </Content>
        </PlayerOverlay>
    )
}
