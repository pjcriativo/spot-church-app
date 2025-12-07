import styled from 'styled-components'
import { Play, Pause, SkipForward } from 'lucide-react'
import { useState } from 'react'

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 60px; /* Above BottomNav */
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.surface};
  backdrop-filter: blur(8px);
  border-top: 1px solid ${props => props.theme.colors.overlay};
  padding: ${props => props.theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  z-index: ${props => props.theme.zIndex.sticky};
  cursor: pointer;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    background: ${props => props.theme.colors.darkGray};
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    bottom: 0;
    left: 240px; /* After Sidebar */
  }
`

const AlbumCover = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.radius.md};
  overflow: hidden;
  flex-shrink: 0;
  background: ${props => props.theme.colors.darkGray};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const TrackInfo = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xs};
  pointer-events: none;
`

const TrackTitle = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.sm};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const TrackArtist = styled.p`
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.lightGray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`

const ControlButton = styled.button<{ $isPlaying?: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: ${props => props.theme.borderRadius.full};
  background: ${props => props.$isPlaying
    ? props.theme.colors.primary
    : props.theme.colors.overlay};
  color: ${props => props.$isPlaying
    ? props.theme.colors.black
    : props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    box-shadow: ${props => props.$isPlaying
    ? props.theme.shadow.glow
    : props.theme.shadow.soft};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`

const SecondaryButton = styled.button`
  width: 32px;
  height: 32px;
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
    box-shadow: ${props => props.theme.shadow.soft};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

interface MiniPlayerProps {
  track: {
    title: string
    artist: string
    artwork: string
  }
  onExpand: () => void
}

export default function MiniPlayer({ track, onExpand }: MiniPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    // Handle next track
  }

  return (
    <PlayerContainer onClick={onExpand}>
      <AlbumCover>
        <img src={track.artwork} alt={track.title} />
      </AlbumCover>

      <TrackInfo>
        <TrackTitle>{track.title}</TrackTitle>
        <TrackArtist>{track.artist}</TrackArtist>
      </TrackInfo>

      <Controls>
        <ControlButton
          $isPlaying={isPlaying}
          onClick={handlePlayPause}
        >
          {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
        </ControlButton>
        <SecondaryButton onClick={handleNext}>
          <SkipForward />
        </SecondaryButton>
      </Controls>
    </PlayerContainer>
  )
}
