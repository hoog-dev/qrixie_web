function dateStrToTimeAgoStr(date: Date) {
	// Generate a time ago string from a date object
	console.log(date)
	const now = new Date()
	const diff = now.getTime() - date.getTime()
	const seconds = Math.floor(diff / 1000)
	const minutes = Math.floor(seconds / 60)
	const hours = Math.floor(minutes / 60)
	const days = Math.floor(hours / 24)

	if (days > 0) {
		return days > 1 ? `${days} days ago` : `${days} day ago`
	} else if (hours > 0) {
		return hours > 1 ? `${hours} hours ago` : `${hours} hour ago`
	} else if (minutes > 0) {
		return minutes > 1 ? `${minutes} minutes ago` : `${minutes} minute ago`
	} else if (seconds > 0) {
		return `${seconds}s ago`
	}

	return 'now'
}

function dateToYearsAgoStr(date: Date) {
	// Generate a years ago string from a date object
	const now = new Date()
	const diff = now.getTime() - date.getTime()
	const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365)
	return years
}

function dateToFormat(date: Date, format: string) {
	if (format == 'Mon YYYY') {
		return date.toLocaleString('default', { month: 'short' }) + ' ' + date.getFullYear()
	}
}

export { dateStrToTimeAgoStr, dateToYearsAgoStr, dateToFormat }
