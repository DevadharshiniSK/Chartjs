const ctx = document.getElementById('Overall').getContext('2d');
const chartjs = document.getElementById('Monthwise').getContext('2d');

const Overall = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Linkedin','Twitter','Task on Time','Task Evaluation','Road Map','Projects','Refering Friend','Internship','Certificate','Experience'],
        datasets: [{
            data: [40,70,20,10,70,20,75,20,30,5],
            backgroundColor: [
                'rgba(49, 156, 234, 1)',
                'rgba(111, 186, 240, 1)',
                'rgba(194, 225, 249, 1)',
                'rgba(255, 79, 79, 1)',
                'rgba(255, 132, 132, 1)',
                'rgba(254, 153, 35, 1)',
                'rgba(254, 184, 101, 1)',
                'rgba(203, 27, 130, 1)',
                'rgba(219, 96, 168, 1)',
                'rgba(62, 211, 25, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        radius: 150,
        cutout: 140,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            }
        }
    }
});

const Monthwise = new Chart(chartjs, {
    type: 'doughnut',
    data: {
        labels: ['Linkedin','Twitter','Task on Time','Task Evaluation','Road Map','Projects','Refering Friend','Internship','Certificate','Experience'],
        datasets: [{
            
            data: [40,70,20,10,70,20,75,20,30,5],
            backgroundColor: [
                'rgba(49, 156, 234, 1)',
                'rgba(111, 186, 240, 1)',
                'rgba(194, 225, 249, 1)',
                'rgba(255, 79, 79, 1)',
                'rgba(255, 132, 132, 1)',
                'rgba(254, 153, 35, 1)',
                'rgba(254, 184, 101, 1)',
                'rgba(203, 27, 130, 1)',
                'rgba(219, 96, 168, 1)',
                'rgba(62, 211, 25, 1)'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        radius: 150,
        cutout: 140,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',

            }
        }
    }
});