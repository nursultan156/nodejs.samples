/**
 * Created by mac on 02.02.17.
 */
var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');

var filesFolderPath = '../files/';
var loopFileNameInput = 'loops.docx';
var loopFileNameOutput = 'loopsOutput.docx';


//Load the docx file as a binary
var content = fs.readFileSync(path.join(__dirname, filesFolderPath, loopFileNameInput), 'binary');
var zip = new JSZip(content);
var doc = new Docxtemplater();
doc.loadZip(zip);


//set the templateVariables
doc.setData({
    houses: [
        {
            controller :"John",
            flats: [
                {
                    cells:[
                        {
                            c: "a1",
                        },
                        {
                            c: 100,
                        }
                    ]
                },
                {
                    cells:[
                        {
                            c: "a2",
                        },
                        {
                            c: 200,
                        }
                    ]
                }
            ]
        },
    ],
    houses2: [
        {
            controller :"Jack",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
        {
            controller :"Jack2",
            flats: [
                {
                    name: "qwe",
                    age: 20,
                },
                {
                    name: "asd",
                    age: 40,
                }
            ]
        },
    ]
});

try {
    // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
    doc.render()
}
catch (error) {
    var e = {
        message: error.message,
        name: error.name,
        stack: error.stack,
        properties: error.properties
    };
    console.log(JSON.stringify({error: e}));
    // The error thrown here contains additional information when logged with JSON.stringify (it contains a property object).
    throw error;
}

var buf = doc.getZip().generate({type: 'nodebuffer'});

// buf is a nodejs buffer, you can either write it to a file or do anything else with it.
fs.writeFileSync(path.join(__dirname, filesFolderPath, loopFileNameOutput), buf);