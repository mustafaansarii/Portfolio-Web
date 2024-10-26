const programmingLanguagesData = {
    labels: ['Java', 'Python', 'JavaScript'],
    datasets: [{
        label: 'Programming Languages',
        data: [80, 90, 70],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'], // Bar colors
        borderWidth: 1, // Optional: border width for bars
    }]
};

const fullStackData = {
    labels: ['Spring Boot', 'Flask', 'ReactJS'],
    datasets: [{
        label: 'Full Stack Development',
        data: [75, 70, 80],
        backgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384'], // Bar colors
        borderWidth: 1,
    }]
};

const exposureData = {
    labels: ['Machine Learning', 'AWS', 'Docker'],
    datasets: [{
        label: 'Exposure',
        data: [85, 70, 65],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Bar colors
        borderWidth: 1,
    }]
};

const developerToolsData = {
    labels: ['Git', 'IntelliJ IDEA', 'Linux'],
    datasets: [{
        label: 'Developer Tools',
        data: [90, 80, 75],
        backgroundColor: ['#FF9F40', '#4BC0C0', '#FF6384'], // Bar colors
        borderWidth: 1,
    }]
};

const config = (data) => {
    return {
        type: 'bar', // Use 'bar' type
        data: data,
        options: {
            indexAxis: 'y', // Set index axis to horizontal
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                    },
                },
                y: {
                    title: {
                        display: true,
                    },
                },
            },
        },
    };
};

const programmingLanguagesChart = new Chart(
    document.getElementById('programmingLanguagesChart'),
    config(programmingLanguagesData)
);

const fullStackChart = new Chart(
    document.getElementById('fullStackChart'),
    config(fullStackData)
);

const exposureChart = new Chart(
    document.getElementById('exposureChart'),
    config(exposureData)
);

const developerToolsChart = new Chart(
    document.getElementById('developerToolsChart'),
    config(developerToolsData)
);