import { ThemeProvider } from 'styled-components'
import { theme } from '../theme/theme'
import { GlobalStyles } from '../theme/GlobalStyles'
import SearchView from '../components/SearchView/SearchView'

export default function Search() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SearchView />
        </ThemeProvider>
    )
}
