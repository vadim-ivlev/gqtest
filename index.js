
var schema={};

function getSchema(inputId){
    var url0 = document.getElementById(inputId).value 
    var queryString = `
    query IntrospectionQuery {
        __schema {
          queryType {
            ...FullType
          }
          mutationType {
            name
          }
          subscriptionType {
            name
          }
          types {
            ...FullType
          }
          directives {
            name
            description
            locations
            args {
              ...InputValue
            }
          }
        }
      }
      
      fragment FullType on __Type {
        kind
        name
        description
        fields(includeDeprecated: true) {
          name
          description
          args {
            ...InputValue
          }
          type {
            ...TypeRef
          }
          isDeprecated
          deprecationReason
        }
        inputFields {
          ...InputValue
        }
        interfaces {
          ...TypeRef
        }
        enumValues(includeDeprecated: true) {
          name
          description
          isDeprecated
          deprecationReason
        }
        possibleTypes {
          ...TypeRef
        }
      }
      
      fragment InputValue on __InputValue {
        name
        description
        type {
          ...TypeRef
        }
        defaultValue
      }
      
      fragment TypeRef on __Type {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
      

    `

    $.ajax({
        type: "POST",
        url: url0,
        data: { query:queryString, variables: '{}'},
        // success: function(response) {$('#schema').text(JSON.stringify(response, null,'  '));},
        success: function(response) {schema = response; $('#schema').jsonViewer(response, {collapsed: true, rootCollapsable: false});},
        dataType: 'json'
        });    

}

function askGraphQL(url, queryString, results) {
    
}
