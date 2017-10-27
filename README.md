# RAILS BLOG PROJECT NYCDA

#Routing
```
      Prefix Verb   URI Pattern                  Controller#Action
    comments GET    /comments(.:format)          comments#index
             POST   /comments(.:format)          comments#create
 new_comment GET    /comments/new(.:format)      comments#new
edit_comment GET    /comments/:id/edit(.:format) comments#edit
     comment GET    /comments/:id(.:format)      comments#show
             PATCH  /comments/:id(.:format)      comments#update
             PUT    /comments/:id(.:format)      comments#update
             DELETE /comments/:id(.:format)      comments#destroy
       posts GET    /posts(.:format)             posts#index
             POST   /posts(.:format)             posts#create
    new_post GET    /posts/new(.:format)         posts#new
   edit_post GET    /posts/:id/edit(.:format)    posts#edit
        post GET    /posts/:id(.:format)         posts#show
             PATCH  /posts/:id(.:format)         posts#update
             PUT    /posts/:id(.:format)         posts#update
             DELETE /posts/:id(.:format)         posts#destroy
       users GET    /users(.:format)             users#index
             POST   /users(.:format)             users#create
    new_user GET    /users/new(.:format)         users#new
   edit_user GET    /users/:id/edit(.:format)    users#edit
        user GET    /users/:id(.:format)         users#show
             PATCH  /users/:id(.:format)         users#update
             PUT    /users/:id(.:format)         users#update
             DELETE /users/:id(.:format)         users#destroy
```

#Palate
```
Hex     | Use
#05668D | 
#028090 | Transparent background for text
#00A896 |
#02C39A |
#F0F3BD | Text

https://coolors.co/05668d-028090-00a896-02c39a-f0f3bd

```

#API Key
```
Google Maps Javascript API key = AIzaSyCPJJsoaUUfc25r2O8ZSHIv5pFRHPHgaIc

#Javascript Maps API
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPJJsoaUUfc25r2O8ZSHIv5pFRHPHgaIc&callback=initMap" type="text/javascript"></script>

#Places Library
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCPJJsoaUUfc25r2O8ZSHIv5pFRHPHgaIc&libraries=places"></script>
```