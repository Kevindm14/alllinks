export const extractDomain = (urlCheck: string) => {
	let hostName = new URL(urlCheck).hostname;
	hostName = hostName.replace('.com', '')
	hostName = hostName.replace('www.', '')
	hostName = hostName.charAt(0).toUpperCase() + hostName.slice(1)

	return hostName
}