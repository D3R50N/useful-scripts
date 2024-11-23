routes.get("/$names/", $cnameController.index);
routes.post("/$names/", $cnameController.store);
routes.get("/$names/:id", $cnameController.show);
routes.get("/$names/:id/:attr", $cnameController.showAttr);
routes.put("/$names/:id", $cnameController.update);
routes.delete("/$names/:id", $cnameController.destroy);
