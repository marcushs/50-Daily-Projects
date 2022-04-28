const resultEl = $('#result')
const search = $('#filter')
const listItems = []

$.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
        const {results} = data

        resultEl.html('')

        results.forEach(user => {
            const li = $("<li></li>")

            listItems.push(li)

            li.html(`
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `)
        })

        resultEl.append(listItems)
    }
  });

search.on('input', (e) => filterData(e.target.value))

function filterData(searchTerm) {
    listItems.forEach(item => {
        const info = item.text().toLowerCase()
        
        if(info.includes(searchTerm.toLowerCase())){
            item.removeClass('hide')
        }else{
            item.addClass('hide')
        }
    })
}
//notes: I get undefined for item in filterData when using Brad's method (.innerText), which makes methods like toLowerCase and includes unavailable, probably conflicts with jQuery(so here I used jQuery's methods)
