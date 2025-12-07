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
    track?: {
        title: string
        artist: string
        artwork: string
    }
}

export default function MiniPlayer({ track }: MiniPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)

    const defaultTrack = {
        title: 'Easy',
        artist: 'Troye Sivan',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop'
    }

    const currentTrack = track || defaultTrack

    return (
        <PlayerContainer>
            <AlbumCover>
                <img src={currentTrack.artwork} alt={currentTrack.title} />
            </AlbumCover>

            <TrackInfo>
                <TrackTitle>{currentTrack.title}</TrackTitle>
                <TrackArtist>{currentTrack.artist}</TrackArtist>
            </TrackInfo>

            <Controls>
                <ControlButton
                    $isPlaying={isPlaying}
                    onClick={() => setIsPlaying(!isPlaying)}
                >
                    {isPlaying ? <Pause fill="currentColor" /> : <Play fill="currentColor" />}
                </ControlButton>
                <SecondaryButton>
                    <SkipForward />
                </SecondaryButton>
            </Controls>
        </PlayerContainer>
    )
}
