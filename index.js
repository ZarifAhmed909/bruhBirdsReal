async function getData() {
    const ctx = document.getElementById('myChart');
    const response =  await fetch("birdsong_metadata.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    const tempArr = []
    const yearArr = []
    let i = 0;
    rows.forEach((elem) => {
        if(i<15){
            const row = elem.split(",");
            yearArr.push(row[3]);
            tempArr.push(row[6]);
            console.log(i)
        }
        i++;
    });
    
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: yearArr,
            datasets: [{
                backgroundColor: 'rgba(180,100,192,22)',
                label: '# of Votes',
                data: tempArr,
                borderWidth: 1
            }]

        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                }
            }
        }
    });
}



        

getData()