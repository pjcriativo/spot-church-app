export interface Category {
    id: string
    name: string
    color: string
}

export interface DiscoverItem {
    id: string
    title: string
    subtitle: string
    artwork: string
    color: string
}

export const mockCategories: Category[] = [
    {
        id: '1',
        name: 'Louvor',
        color: '#DEBDFF',
    },
    {
        id: '2',
        name: 'Adoração',
        color: '#E1FFBA',
    },
    {
        id: '3',
        name: 'Podcast',
        color: '#DEBDFF',
    },
    {
        id: '4',
        name: 'Sermões',
        color: '#E1FFBA',
    },
    {
        id: '5',
        name: 'Gospel',
        color: '#DEBDFF',
    },
    {
        id: '6',
        name: 'Contemporâneo',
        color: '#E1FFBA',
    },
]

export const mockDiscoverItems: DiscoverItem[] = [
    {
        id: '1',
        title: 'Indie Pop',
        subtitle: 'Playlist',
        artwork: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=400&fit=crop',
        color: '#8B5CF6',
    },
    {
        id: '2',
        title: 'Chill Vibes',
        subtitle: 'Playlist',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        color: '#3B82F6',
    },
    {
        id: '3',
        title: 'Workout Mix',
        subtitle: 'Playlist',
        artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
        color: '#EF4444',
    },
    {
        id: '4',
        title: 'Late Night',
        subtitle: 'Playlist',
        artwork: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop',
        color: '#10B981',
    },
    {
        id: '5',
        title: 'Road Trip',
        subtitle: 'Playlist',
        artwork: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop',
        color: '#F59E0B',
    },
    {
        id: '6',
        title: 'Focus Flow',
        subtitle: 'Playlist',
        artwork: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
        color: '#EC4899',
    },
    {
        id: '7',
        title: 'Starboy',
        subtitle: 'Álbum',
        artwork: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
        color: '#6366F1',
    },
    {
        id: '8',
        title: 'After Hours',
        subtitle: 'Álbum',
        artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
        color: '#14B8A6',
    },
]
