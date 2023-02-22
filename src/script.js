import * as ko from 'knockout'
import test from './test'
import testComponent from './test-component.html'
class testModel{
    constructor(){
    }
    name = "Moshsdsde"
    newName = test.name
    test = "Foo"
}

const app = document.getElementById("knockout-app")
app.insertAdjacentHTML('beforeend' , testComponent)
ko.applyBindings(new testModel() , app)
