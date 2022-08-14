//chart-1
const data = {
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
  };

  const config = {
    type: 'bar',
    data,
    options: {
     maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  
const myChart = new Chart(document.getElementById('Overall'),config );

//chart-2
const Month = {
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
};

const config1 = {
  type: 'bar',
  data,
  options: {
   maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};


const Monthwise = new Chart(document.getElementById('Monthwise'),config1 );
