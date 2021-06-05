import React, { useState, useEffect } from 'react';
import {stateToHTML} from 'draft-js-export-html';
import {ContentState,convertFromHTML, EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg'
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
function Main(props) {
  const [editor, setEditor]=useState(
      props.loadSomething===null?EditorState.createEmpty():EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(localStorage.getItem(props.loadSomething)).contentBlocks,convertFromHTML(localStorage.getItem(props.loadSomething)).entityMap,))
      );
  const [currentHTML, setCurrentHTML]=useState("");
  const [project, setProject]=useState(props.loadSomething===null?"UntitledProject":props.loadSomething);
  const [autoSave, setAutoSave]=useState(false);
  const [bgcolor, setbgColor]=useState("#FFFFFF");
  const downloadTxtFile = (markup) => {
    const file = new Blob([markup], {type:"text/html"});
    const f=URL.createObjectURL(file);
    return f;
  }
  useEffect(()=>{if(autoSave){
    localStorage.setItem(project, currentHTML);
  }});
  const options={
     inlineStyleFn:(styles)=>{
        let key = 'color-';
        let key2='bgcolor-'
        let key3='fontsize-'
        console.log(styles);
        let color = styles.filter((value) => value.startsWith(key)).first();
        let bgcolor=styles.filter((value)=>value.startsWith(key2)).first();
        let fontsize=styles.filter(value=>value.startsWith(key3)).first();
        if(fontsize){
            var dup=fontsize.replace('px', '')
            console.log(dup);
            console.log(dup.replace(key3, ""))
        }
        if (color || bgcolor || fontsize) {
            return {
              element: 'span',
              style: {
                color: color?color.replace(key, ''):"black",
                backgroundColor:bgcolor?bgcolor.replace(key2, ''):"white",
                fontSize:fontsize?Number(dup.replace(key3, '')):16
              },
            };
        }
     }
  }
  return (
    <div className="App" style={{marginBottom:"40px"}}>
      <label>Advanced style formatting will not be retrieved in the editor. 
          Once you are happy with the blog, you can style it
          for publishing.
      </label><br /><br />
      <label>Please ensure correct name before saving/enabling auto save</label><br />
      <input className="extra"type="text" placeholder="Project name"value={project}onChange={e=>setProject(e.target.value)}/><br />
      <label className="extra">Background Color:</label><input className="extra"type="color" value={bgcolor} onChange={e=>setbgColor(e.target.value)}/>
      <Editor editorStyle={{backgroundColor:bgcolor, height:"80%",minHeight:"200px", marginBottom:"30px"}} editorState={editor} onEditorStateChange={e=>{setEditor(e);
        setCurrentHTML(stateToHTML(e.getCurrentContent(), options));console.log(currentHTML)}
        }/>
      <a href={downloadTxtFile(currentHTML)} download= {`${project}.webpaddoc`} >Download</a>
      <input type="file" onChange={e=>{
        e.preventDefault();
        const filer=new FileReader();
        filer.onload=(eve)=>{
          const markup=eve.target.result;
          setEditor(EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(markup).contentBlocks, convertFromHTML(markup).entityMap)));
          setCurrentHTML(markup);
        }
        filer.readAsText(e.target.files[0]);
      }}/><br />
      <label>Autosave:</label><input type="checkbox" checked={autoSave}onChange={e=>setAutoSave(e.target.checked)}/><br /><br />
      <button onClick={()=>localStorage.setItem(project, currentHTML)}>Save</button>
    </div>
  );
}

export default Main;