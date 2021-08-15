<template>
    <div class="userCardContainer"> 
        <div class="col">
        <div class="row justify-content-center" >
            <div class="card" style="width: 20rem;">
                <div class="card-body">
                    <h5 class="card-title">{{$route.params.id}}</h5>
                    <p class="card-text"><strong>Email: </strong>{{$route.query.user.email}}</p>
                    <p class="card-text"><strong>Phone: </strong>{{$route.query.user.phone}}</p>
                    <p class="card-text"><strong>Street: </strong>{{$route.query.user.address.street}}</p>
                    <p class="card-text"><strong>Suite: </strong>{{$route.query.user.address.suite}}</p>
                    <p class="card-text"><strong>City: </strong>{{$route.query.user.address.city}}</p>
                    <p class="card-text"><strong>Zip: </strong>{{$route.query.user.address.zipcode}}</p>
                </div>
            </div>
        </div >
        </div>
    </div>
</template>