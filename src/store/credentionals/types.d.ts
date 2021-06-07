interface ICredentials {
    github: {
        profileLink: string
        profileName: string
    },
    gmail: string,
    telegram: string
}

type ECredentials = keyof ICredentials
