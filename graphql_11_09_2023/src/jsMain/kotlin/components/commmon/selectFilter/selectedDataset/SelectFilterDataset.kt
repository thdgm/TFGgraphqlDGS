package components.commmon.selectFilter.selectedDataset




import components.commmon.FilterListContextAll
import csstype.NamedColor
import csstype.px
import models.DatasetInfo
import mui.material.FormControl
import mui.material.FormHelperText
import mui.material.InputLabel
import mui.material.MenuItem
import mui.material.Select
import mui.material.Size
import mui.system.sx
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLLIElement
import react.FC
import react.Props
import react.ReactNode
import react.dom.events.ChangeEvent
import react.dom.events.MouseEvent
import react.useRequiredContext
import react.useState

external interface SelectedFilterProps : Props {
    var infoDataset: MutableList<DatasetInfo>
}
val selectFilterDataset = FC<SelectedFilterProps> { props ->
    var datasetInfo by useState(props.infoDataset)
    var orderVal by useState("")
    var selectedFilters by useRequiredContext(FilterListContextAll)
    val handleChange: (event: ChangeEvent<HTMLInputElement>, child: ReactNode) -> Unit = {event,_ ->
        orderVal = event.target.value
    }
    fun checkIfSelectedFiltersIsEmpty(selectedVal: String): Boolean{
        selectedFilters["Datasets"]?.map{
            if (it.key == selectedVal){
                if(it.value.isEmpty()){
                    return true
                }
            }
        }
        selectedFilters["Datasets"]?.map{
            if (!it.value.isEmpty()){
                return false
            }
        }
        return true
    }
    FormControl {
        sx {
            minWidth = 220.px

        }
        size = Size.small
        InputLabel {
            id = "demo-select-small"
            +"Search by"
        }
        Select {
            sx {
                backgroundColor = NamedColor.white
            }
            labelId = "demo-select-small"
            id = "demo-select-small"
            value = if (checkIfSelectedFiltersIsEmpty(orderVal)) "" else orderVal
            label = ReactNode("Ordenar por")
            onChange = handleChange

            MenuItem {
                value = ""
                +"None"
            }
            if (!datasetInfo.elementAt(0)?.publisher.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "Datasets") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Publicador"
                    accessKey = "Publicador"
                    id = "${datasetInfo.elementAt(0)?.publisher}"
                    +"Publicador"
                }
            }
            if (!datasetInfo.elementAt(0)?.license.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "Datasets") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Licenses"
                    accessKey = "Licenses"
                    id = "${datasetInfo.elementAt(0)?.license}"
                    +"Licenses"
                }
            }
            if (!datasetInfo.elementAt(0)?.notation.isNullOrBlank()) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "Datasets") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Nivel de Administración"
                    accessKey = "Nivel de Administración"
                    id = "${datasetInfo.elementAt(0)?.notation}"
                    +"Nivel de Administración"
                }
            }
            if (!datasetInfo.elementAt(0)?.issued.isNullOrEmpty() && datasetInfo.elementAt(0)?.issued != "null") {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "Datasets") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Fecha creación"
                    accessKey = "Fecha creación"
                    id = "${datasetInfo.elementAt(0)?.issued}"
                    +"Fecha creación"
                }
            }
            if (!datasetInfo.elementAt(0)?.modified.isNullOrBlank() && datasetInfo.elementAt(0)?.modified != "null"){
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "Datasets") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                    //else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    value = "Fecha última modificación"
                    accessKey = "Fecha última modificación"
                    id = "${datasetInfo.elementAt(0)?.modified}"
                    +"Fecha última modificación"
                }
            }
            if(datasetInfo.elementAt(0)?.accrualPeriodicity != null) {
                MenuItem {
                    onClick = { event: MouseEvent<HTMLLIElement, *> ->
                        orderVal = "Titulo"; selectedFilters =
                        selectedFilters.toMutableMap().mapValues { (key, catalogMap) ->
                            if (key == "Datasets") {
                                catalogMap!!.toMutableMap().mapValues { (innerKey, filterVal) ->
                                    if (innerKey == event.currentTarget.accessKey && !filterVal.contains(event.currentTarget.id)) filterVal.plus(
                                        event.currentTarget.id
                                    )
                                   // else if (filterVal.contains(event.currentTarget.id)) filterVal.filter { miVal -> miVal != event.currentTarget.id }
                                    else filterVal
                                }.toMutableMap()
                            } else {
                                catalogMap
                            }
                        }.toMutableMap()
                    }
                    accessKey = "Periodo"
                    id = "${datasetInfo.elementAt(0)?.temporalStart} -- ${datasetInfo.elementAt(0)?.temporalEnd}"
                    value = "Periodo"
                    +"Periodo"
                }
            }

        }
        FormHelperText{
            + "Look for similar content"
        }
    }
}

/*
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest1','2023-01-12T19:01:30+00:00','','2023-05-12T20:01:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest2','2023-02-12T19:01:30+00:00','','2023-02-12T19:01:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest3','2023-03-12T19:01:30+00:00','','2023-03-12T19:09:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest4','2023-04-12T19:01:30+00:00','','2023-04-12T19:08:30+00:00','',null,null,null,'A12002994');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest5','2023-05-12T19:01:30+00:00','','2023-05-12T19:05:30+00:00','',null,null,null,'EA0022362');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest6','2023-01-14T19:01:30+00:00','','2023-01-14T19:05:30+00:00','',null,null,null,'L01082009');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest7','2023-01-12T19:10:30+00:00','','2023-01-12T19:12:30+00:00','',null,null,null,'L01082009');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest8','2023-06-12T19:01:30+00:00','','2023-06-12T19:04:30+00:00','',null,null,null,'U01900001');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest9','2023-05-02T19:01:30+00:00','','2023-05-02T19:11:30+00:00','',null,null,null,'U01900001');
INSERT INTO resource (tipo, id,issued, license, modified, accrual_periodicity, temporal_coverage_end, temporal_coverage_start, validity, publisher_id) VALUES ('catalog','catTest10','2022-01-12T19:01:30+00:00','','2022-01-12T19:15:30+00:00','',null,null,null,'EA0022362');


INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest1','Título 1 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest2','Title 1 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest3','Title 2 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest4','Title 1 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest5','Title 2 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest6','Title 3 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest7','Title 4 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest8','Title 5 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest9','Title 6 test');
INSERT INTO titles_resource (id_resource,id_title) VALUES ('catTest10','Title 7 test');

INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('es','catTest1','Título 1 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest2','Title 1 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest3','Title 2 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest4','Title 1 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest5','Title 2 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest6','Title 3 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest7','Title 4 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest8','Title 5 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest9','Title 6 test');
INSERT INTO languages_titles_resources (id_language,id_resource,id_title) VALUES ('en','catTest10','Title 7 test');

INSERT INTO description (id_description,id_resource) VALUES ('Descripción 1 test','catTest1');
INSERT INTO description (id_description,id_resource) VALUES ('Description 1 test','catTest5');
INSERT INTO description (id_description,id_resource) VALUES ('Description 10 test','catTest10');

INSERT INTO languages_descriptions (id_language,id_description,id_resource) VALUES ('es','Descripción 1 test','catTest1');
INSERT INTO languages_descriptions (id_language,id_description,id_resource) VALUES ('en','Description 1 test','catTest5');
INSERT INTO languages_descriptions (id_language,id_description,id_resource) VALUES ('en','Description 10 test','catTest10');

INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest1/CatalogRecord','','','','CR for testing','catTest1');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest2/CatalogRecord','','','','CR for testing','catTest2');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest3/CatalogRecord','','','','CR for testing','catTest3');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest4/CatalogRecord','','','','CR for testing','catTest4');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest5/CatalogRecord','','','','CR for testing','catTest5');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest6/CatalogRecord','','','','CR for testing','catTest6');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest7/CatalogRecord','','','','CR for testing','catTest7');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest8/CatalogRecord','','','','CR for testing','catTest8');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest9/CatalogRecord','','','','CR for testing','catTest9');
INSERT INTO catalogrecord (id,content, content_type, content_url, title, resource_id) VALUES ('catTest10/CatalogRecord','','','','CR for testing','catTest10');

INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest1/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest2/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest3/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest4/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest5/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest6/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest7/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest8/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest9/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('root','catTest10/CatalogRecord');


INSERT INTO relationships (id_resource,id_catalog) VALUES ('21e96ff5-c75c-3f43-a5f0-55e304ac39c7','catTest1');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('302ffe35-0dad-3c20-b96a-d1fea7876813','catTest1');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('302ffe35-0dad-3c20-b96a-d1fea7876813','catTest2');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('4bfcfcd3-b67e-3d8e-b52b-66f933d30bfc','catTest3');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('d06ced1b-8f86-3826-99fb-b3dc09c3e785','catTest4');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('23a82498-bd1f-34f5-bc9c-74514b8d84c6','catTest5');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('4575a472-fbe9-32a2-9a78-b5891fac6859','catTest6');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('01dc9d53-262b-3124-96ab-c5b6da29f6df','catTest7');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('11861360-7699-3eca-87dc-17ba87116bf6','catTest8');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('62c75a72-0eb8-3b6f-938b-5a808daf1dbf','catTest9');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('c99299b5-d5f7-39c8-82ac-d68fff399802','catTest10');

INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest1','21e96ff5-c75c-3f43-a5f0-55e304ac39c7/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest1','302ffe35-0dad-3c20-b96a-d1fea7876813/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest2','302ffe35-0dad-3c20-b96a-d1fea7876813/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest3','4bfcfcd3-b67e-3d8e-b52b-66f933d30bfc/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest3','d06ced1b-8f86-3826-99fb-b3dc09c3e785/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest4','23a82498-bd1f-34f5-bc9c-74514b8d84c6/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest5','4575a472-fbe9-32a2-9a78-b5891fac6859/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest6','01dc9d53-262b-3124-96ab-c5b6da29f6df/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest7','11861360-7699-3eca-87dc-17ba87116bf6/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest8','62c75a72-0eb8-3b6f-938b-5a808daf1dbf/CatalogRecord');
INSERT INTO cataloginrecord (id_resource,id_catalog_record) VALUES ('catTest10','c99299b5-d5f7-39c8-82ac-d68fff399802/CatalogRecord');

INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest1','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest2','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest3','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest4','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest5','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest6','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest7','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest8','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest9','root');
INSERT INTO relationships (id_resource,id_catalog) VALUES ('catTest10','root');

 */