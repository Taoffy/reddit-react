const postTimeDetermine = (created: number): string => {
    let finalString = "4 hours ago";

    const timeDiff = new Date().getTime() - created * 1000;

    const
        seconds = timeDiff / 1000, 
        minutes = seconds / 60,
        hours = minutes / 60,
        days = hours / 24,
        weeks = days / 7,
        months = days / 30,
        years = days / 365;

    if(minutes < 1) {
        finalString = `${seconds.toFixed()} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
    else if(hours < 1) {
        finalString = `${minutes.toFixed()} ${minutes === 1 ? 'minute' : 'minutes'} ago`; 
    }
    else if(days < 1) {
        finalString = `${hours.toFixed()} ${hours === 1 ? 'hour' : 'hours'} ago`;
    }
    else if(weeks < 1) {
        finalString = `${days.toFixed()} ${days === 1 ? 'day' : 'days'} ago`;
    }
    else if(months < 1) {
        finalString = `${weeks.toFixed()} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    }
    else if(years < 1) {
        finalString = `${months.toFixed()} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
        finalString = `${years.toFixed()} ${years === 1 ? 'year' : 'years'} ago`;
    }

    return finalString;
};

export default postTimeDetermine;