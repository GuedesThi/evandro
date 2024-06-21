import { styled } from "@stitches/react";
import Link from "next/link";
import Image from "next/image";

const DefaultLayoutContainer = styled('div', {
    width: '100vw',
    height: 'auto',

    'a': {
        textDecoration: 'none',
        color: '$blue',
        cursor: 'pointer',

        'h1': {
            fontFamily: '$title',
        }
    }
})

const DefaultHeader = styled('header', {
    padding: '2.5rem 3rem',
    width: '100vw',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    gap: '2.4rem',
})

const Line = styled('div', {
    background: '$blue',
    width: '0.1rem',
    height: '2.4rem',
    borderRadius: '10px',
})

const SearchContainer = styled('div', {
    position: 'relative',
    width: '38rem',
})

const SearchInput = styled('input', {
    padding: '0.9rem 1rem',
    width: '100%',
    border: '2px solid $black',
    borderRadius: '26px',
    paddingRight: '3rem',
    fontFamily: '$text',
    fontWeight: '400',
    fontSize: '1rem',
    cursor: 'pointer',

    '&:hover': {
        border: '2px solid $blue',
    },

    '&:focus': {
        border: '2px solid $blue',
        outline: 'none',
    },

    '&::placeholder': {
        fontFamily: '$text',
        color: '$grayLight'
    }
})

const SearchIcon = styled(Image, {
    position: 'absolute',
    right: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer'
})

const IconsContainer = styled('div', {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginLeft: '2rem',

    'img': {
        background: '$blue',
        padding: '0.2rem',
        borderRadius: '8px',
    }
})

const ContentContainer = styled('div', {
    padding: '2.5rem 3rem',
    width: '100vw',
    height: '100%'
})

const LineLarge = styled('div', {
    background: '$blue',
    width: '100vw',
    height: '4rem',
})

interface DefaultLayoutProps {
    children: React.ReactNode
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
    return (
        <DefaultLayoutContainer>
            <DefaultHeader>
                <Link href='/'>
                    <h1>ENGENHOSO</h1>
                </Link>

                <Line/>

                <SearchContainer>
                    <SearchInput placeholder="O que você deseja hoje?" />
                    <SearchIcon src='/default/search.png' alt='logo-pesquisar' width={20} height={20}/>
                </SearchContainer>

                <IconsContainer>
                    <Link href="/login">
                        <Image src='/default/account.png' width={27} height={27} alt='icone-conta'/>
                    </Link>
                    
                    <Line/>

                    <Link href="/shop">
                        <Image src='/default/shop.png' width={26} height={27} alt='icone-carrinho'/>
                    </Link>
                </IconsContainer>
            </DefaultHeader>
            <LineLarge/>

            <ContentContainer>
                <main>{children}</main>
            </ContentContainer>
        </DefaultLayoutContainer>
    )
}