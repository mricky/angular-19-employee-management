export class ClientProject {
    empName:         string;
    empId:           number;
    empCode:         string;
    empEmailId:      string;
    empDesignation:  string;
    projectName:     string;
    startDate:       Date;
    expectedEndDate: Date;
    clientName:      string;
    clientProjectId: number;
    
    constructor(){
        this.clientProjectId = 0;
        this.clientName = '';
        this.expectedEndDate = new Date();
        this.startDate = new Date();;
        this.projectName = '';
        this.empDesignation = '';
        this.empEmailId = ''; 
        this.empCode ='';
        this.empId = 0;
        this.empName = '';
    }
    
}