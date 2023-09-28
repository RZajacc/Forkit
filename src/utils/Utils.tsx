    
    // * Helper function to format date
    export const formatDate = (date: number): string => {
        const formatedDate = new Date(date*1000).toLocaleString();
        return formatedDate
    }